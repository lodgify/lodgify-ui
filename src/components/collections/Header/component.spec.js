jest.mock('lodash/debounce');
jest.mock('./utils/getNavigationItemsWidth');
jest.mock('./utils/getMenuWidth');
jest.mock('./utils/getIsMenuHidden');

import React from 'react';
import { debounce } from 'lodash';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Header } from './component';
import { navigationItems } from './mock-data/navigationItems';
import { getNavigationItemsWidth } from './utils/getNavigationItemsWidth';
import { getMenuWidth } from './utils/getMenuWidth';
import { getIsMenuHidden } from './utils/getIsMenuHidden';

const logoText = 'someLogoText';
const props = {
  logoText,
  navigationItems,
  dateRangePickerLocaleCode: 'ko',
};

const getHeaderMount = extraProps =>
  mount(<Header {...props} {...extraProps} />);

const getHeaderShallow = () => shallow(<Header {...props} />);

describe('<Header />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getHeaderMount();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isMenuHidden` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getHeaderMount();

      actual.setState({ isMenuHidden: true });
      actual.update();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isBackgroundFilled` is true', () => {
    it('should render the right structure', () => {
      const actual = getHeaderMount({ isBackgroundFilled: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('`componentDidMount`', () => {
    it('should call `debounce` with the right arguments', () => {
      const wrapper = getHeaderShallow();
      const handler = wrapper.instance().handleResize;

      debounce.mockClear();
      wrapper.instance().componentDidMount();

      expect(debounce).toHaveBeenCalledWith(handler, 150);
    });

    it('should call `handleResize`', () => {
      const wrapper = getHeaderShallow();

      wrapper.instance().handleResize = jest.fn();
      wrapper.update();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().handleResize).toHaveBeenCalled();
    });

    it('should call `getNavigationItemsWidth` with the right arguments', () => {
      const wrapper = getHeaderMount();

      getNavigationItemsWidth.mockClear();
      wrapper.instance().componentDidMount();

      expect(getNavigationItemsWidth).toHaveBeenCalledWith(
        wrapper.instance().header
      );
    });

    it('should call `setState` with the right arguments', () => {
      const wrapper = getHeaderShallow();
      const NAVIGATION_ITEMS_WIDTH = 'some width';

      getNavigationItemsWidth.mockReturnValueOnce(NAVIGATION_ITEMS_WIDTH);
      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        navigationItemsWidth: NAVIGATION_ITEMS_WIDTH,
        isOpaque: true,
      });
    });
  });

  describe('`componentDidUpdate`', () => {
    describe('if `state.windowInnerWidth` has changed', () => {
      it('should call `getMenuWidth` with the right arguments', () => {
        const wrapper = getHeaderMount();

        wrapper
          .instance()
          .componentDidUpdate(undefined, { windowInnerWidth: 'something new' });

        expect(getMenuWidth).toHaveBeenCalledWith(wrapper.instance().header);
      });

      it('should call `getIsMenuHidden` with the right arguments', () => {
        const wrapper = getHeaderShallow();
        const MENU_WIDTH = 'some other width';

        getMenuWidth.mockReturnValueOnce(MENU_WIDTH);
        wrapper
          .instance()
          .componentDidUpdate(undefined, { windowInnerWidth: 'something new' });

        expect(getIsMenuHidden).toHaveBeenCalledWith(
          MENU_WIDTH,
          wrapper.state('navigationItemsWidth')
        );
      });

      it('should call `setState` with the right arguments', () => {
        const wrapper = getHeaderShallow();
        const IS_MENU_HIDDEN = 'no';

        getIsMenuHidden.mockReturnValueOnce(IS_MENU_HIDDEN);
        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper
          .instance()
          .componentDidUpdate(undefined, { windowInnerWidth: 'something new' });

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          isMenuHidden: IS_MENU_HIDDEN,
        });
      });
    });

    describe('if `state.windowInnerWidth` has not changed', () => {
      it('should not call `getMenuWidth`', () => {
        const wrapper = getHeaderMount();

        getMenuWidth.mockClear();
        wrapper.instance().componentDidUpdate(undefined, {});

        expect(getMenuWidth).not.toHaveBeenCalled();
      });

      it('should not call `getIsMenuHidden`', () => {
        const wrapper = getHeaderShallow();

        getIsMenuHidden.mockClear();
        wrapper.instance().componentDidUpdate(undefined, {});

        expect(getIsMenuHidden).not.toHaveBeenCalled();
      });

      it('should not call `setState`', () => {
        const wrapper = getHeaderShallow();

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidUpdate(undefined, {});

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });
  });

  describe('`createHeaderRef`', () => {
    it('should create the ref', () => {
      const wrapper = getHeaderShallow();
      const HEADER = '🎧';

      wrapper.instance().createHeaderRef(HEADER);

      const actual = wrapper.instance().header;

      expect(actual).toBe(HEADER);
    });
  });

  describe('`handleResize`', () => {
    describe('if `event` is `undefined`', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getHeaderShallow();

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().handleResize(undefined);

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          windowInnerWidth: undefined,
        });
      });
    });

    describe('if `event` is an event object', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getHeaderShallow();
        const innerWidth = 'some inner width';
        const event = { target: { innerWidth } };

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().handleResize(event);

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          windowInnerWidth: innerWidth,
        });
      });
    });
  });

  it('should have `displayName` Header', () => {
    expectComponentToHaveDisplayName(Header, 'Header');
  });
});
