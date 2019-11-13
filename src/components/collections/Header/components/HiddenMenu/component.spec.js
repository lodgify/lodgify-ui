jest.mock('./utils/getIsAccordionInView');
jest.mock('./utils/getScrollToHeight');

import React from 'react';
import { mount, shallow } from 'enzyme';

import { navigationItems } from '../../mock-data/navigationItems';

import { getIsAccordionInView } from './utils/getIsAccordionInView';
import { getScrollToHeight } from './utils/getScrollToHeight';
import { Component } from './component';

const getBoundingClientRect = jest.fn(() => ({ bottom: 0, top: 0 }));

const SCROLL_HEIGHT = 4321;

getScrollToHeight.mockReturnValue(SCROLL_HEIGHT);

const activeAccordionItem = {
  getBoundingClientRect,
  offsetParent: {
    scrollTop: 0,
  },
};

const getHiddenMenuMount = () =>
  mount(
    <Component
      logoText="yo"
      navigationItems={navigationItems}
      primaryCTA={{ onClick: Function.prototype, text: 'Book now' }}
    />
  );

const getHiddenMenuShallow = () =>
  shallow(
    <Component
      logoText="yo"
      navigationItems={navigationItems}
      primaryCTA={{ onClick: Function.prototype, text: 'Book now' }}
    />
  );

describe('HiddenMenu', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getHiddenMenuMount();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `activeAccordionItem` is falsy', () => {
      it('should not call `getIsAccordionInView`', () => {
        const wrapper = getHiddenMenuShallow();

        wrapper.instance().componentDidUpdate();

        expect(getIsAccordionInView).not.toHaveBeenCalled();
      });
    });

    describe('if `activeAccordionItem` is truthy', () => {
      getIsAccordionInView.mockReturnValue(true);

      it('should call `getIsAccordionInView` with the correct arguments', () => {
        const wrapper = getHiddenMenuShallow();

        wrapper.instance().setState({ activeAccordionItem });

        expect(getIsAccordionInView).toHaveBeenCalledWith(activeAccordionItem);
      });
    });

    describe('if `getIsAccordionInView` returns a falsy value', () => {
      getIsAccordionInView.mockReturnValue(false);

      beforeEach(() => {
        const wrapper = getHiddenMenuShallow();

        wrapper.instance().setState({ activeAccordionItem });
      });

      it('should call `activeAccordionItem.getBoundingClientRect`', () => {
        expect(getBoundingClientRect).toHaveBeenCalled();
      });

      it('should call `getScrollToHeight` with the correct arguments', () => {
        expect(getScrollToHeight).toHaveBeenCalledWith(
          activeAccordionItem.offsetParent.scrollTop,
          getBoundingClientRect().bottom
        );
      });

      it('should set the value of `activeAccordionItem.offsetParent.scrollTop` to `getScrollToHeight`s returned value', () => {
        expect(activeAccordionItem.offsetParent.scrollTop).toEqual(
          SCROLL_HEIGHT
        );
      });
    });
  });

  describe('createMenuRef', () => {
    it('should create the ref', () => {
      const wrapper = getHiddenMenuShallow();
      const MENU = '🎧';

      wrapper.instance().createMenuRef(MENU);

      const actual = wrapper.instance().menu;

      expect(actual).toBe(MENU);
    });
  });

  describe('handleAccordionTitleClick', () => {
    describe('if `this.state.activeAccordionItem` is equal to `event.currentTarget.offsetParent`', () => {
      it('should call `this.forceUpdate`', () => {
        const wrapper = getHiddenMenuShallow();

        wrapper.instance().forceUpdate = jest.fn();
        wrapper.setState({ activeAccordionItem });

        wrapper.instance().handleAccordionTitleClick({
          currentTarget: {
            offsetParent: activeAccordionItem,
          },
        });

        expect(wrapper.instance().forceUpdate).toHaveBeenCalled();
      });
    });

    describe('if `this.state.activeAccordionItem` is falsy', () => {
      it('should call `this.setState` with the correct arguments', () => {
        const offsetParent = '👪';
        const event = {
          currentTarget: {
            offsetParent,
          },
        };
        const wrapper = getHiddenMenuShallow();

        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleAccordionTitleClick(event);

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          activeAccordionItem: offsetParent,
        });
      });
    });
  });
});
