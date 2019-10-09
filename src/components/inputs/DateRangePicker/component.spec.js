jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});
jest.mock('utils/get-window-height');
jest.mock('utils/is-blur-event');
jest.mock('utils/is-displayed-as-modal');
jest.mock('debounce');
jest.mock('uniqid');
jest.mock('./utils/getIsFocusControlled');
jest.mock('./utils/getIsVisible');

import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import uniqid from 'uniqid';
import { debounce } from 'debounce';

import { getWindowHeight } from 'utils/get-window-height';
import { isBlurEvent } from 'utils/is-blur-event';
import { isDisplayedAsModal } from 'utils/is-displayed-as-modal';

import { getIsFocusControlled } from './utils/getIsFocusControlled';
import { getIsVisible } from './utils/getIsVisible';
import { ComponentWithResponsive as DateRangePicker } from './component';

const STARTING_WINDOW_HEIGHT = 900;
const NEXT_WINDOW_HEIGHT = 800;

const getDateRangePicker = extraProps =>
  mount(<DateRangePicker {...extraProps} />);
const getWrappedDateRangePicker = props => {
  const Child = shallow(<DateRangePicker />).prop('as');

  return shallow(<Child {...props} />);
};

debounce.mockImplementation(func => func);
uniqid.mockImplementation(value => value);

describe('<DateRangePicker />', () => {
  beforeEach(() => {
    getWindowHeight.mockReset();
    getWindowHeight.mockReturnValueOnce(STARTING_WINDOW_HEIGHT);
    getWindowHeight.mockReturnValueOnce(NEXT_WINDOW_HEIGHT);
  });

  describe('`componentDidMount`', () => {
    it('should set the correct `moment.locale`', () => {
      const localeCode = 'ko';
      const dateRangePicker = getWrappedDateRangePicker({ localeCode });

      dateRangePicker.instance().componentDidMount();
      const actual = moment.locale();

      expect(actual).toEqual(localeCode);
    });

    it('should call `this.handleHeightChange`', () => {
      const wrapper = getWrappedDateRangePicker();

      wrapper.instance().handleHeightChange = jest.fn();
      wrapper.update();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().handleHeightChange).toHaveBeenCalled();
    });

    it('should call `global.addEventListener` with the right arguments', () => {
      global.addEventListener = jest.fn();
      const wrapper = getWrappedDateRangePicker();

      wrapper.instance().componentDidMount();
      expect(global.addEventListener).toHaveBeenCalledWith(
        'resize',
        wrapper.instance().handleHeightChange
      );
    });
  });

  describe('`componentDidUpdate`', () => {
    it('should call `getIsFocusControlled` with the right arguments', () => {
      const focusedInput = 'endDate';
      const wrapper = getWrappedDateRangePicker({ focusedInput });

      getIsFocusControlled.mockClear();
      wrapper.instance().componentDidUpdate({}, {});

      expect(getIsFocusControlled).toHaveBeenCalledWith(focusedInput);
    });

    describe('if `getIsFocusControlled` returns `true`', () => {
      it('should call `isBlurEvent` with the right arguments', () => {
        const previousFocusedInput = 'startDate';
        const focusedInput = 'endDate';
        const wrapper = getWrappedDateRangePicker({ focusedInput });

        getIsFocusControlled.mockReturnValueOnce(true);
        wrapper
          .instance()
          .componentDidUpdate({ focusedInput: previousFocusedInput }, {});

        expect(isBlurEvent).toHaveBeenCalledWith(
          previousFocusedInput,
          focusedInput
        );
      });

      describe('if `isBlurEvent` returns `true`', () => {
        it('should call `props.onBlur`', () => {
          const onBlur = jest.fn();
          const wrapper = getWrappedDateRangePicker({ onBlur });

          isBlurEvent.mockClear();
          isBlurEvent.mockReturnValueOnce(true);
          getIsFocusControlled.mockReturnValueOnce(true);
          wrapper.instance().componentDidUpdate({}, {});

          expect(isBlurEvent).toHaveBeenCalled();
        });
      });

      it('should not call `props.onFocusChange`', () => {
        const onFocusChange = jest.fn();
        const previousFocusedInput = 'startDate';
        const focusedInput = 'endDate';
        const wrapper = getWrappedDateRangePicker({
          focusedInput,
          onFocusChange,
        });

        getIsFocusControlled.mockReturnValueOnce(true);
        wrapper
          .instance()
          .componentDidUpdate({ focusedInput: previousFocusedInput }, {});

        expect(onFocusChange).not.toHaveBeenCalled();
      });
    });

    describe('if `getIsFocusControlled` returns `false`', () => {
      it('should call `isBlurEvent` with the right arguments', () => {
        const previousFocusedInput = 'startDate';
        const focusedInput = 'endDate';
        const wrapper = getWrappedDateRangePicker({ focusedInput });

        wrapper.setState({ focusedInput });
        isBlurEvent.mockClear();
        getIsFocusControlled.mockReturnValueOnce(false);
        wrapper
          .instance()
          .componentDidUpdate({}, { focusedInput: previousFocusedInput });

        expect(isBlurEvent).toHaveBeenCalledWith(
          previousFocusedInput,
          focusedInput
        );
      });

      describe('if the focused input has not changed', () => {
        it('should not call `props.onFocusChange`', () => {
          const onFocusChange = jest.fn();
          const previousFocusedInput = 'startDate';
          const focusedInput = 'startDate';
          const wrapper = getWrappedDateRangePicker({
            onFocusChange,
          });

          wrapper.setState({ focusedInput });
          onFocusChange.mockClear();
          getIsFocusControlled.mockReturnValueOnce(false);
          wrapper
            .instance()
            .componentDidUpdate({}, { focusedInput: previousFocusedInput });

          expect(onFocusChange).not.toHaveBeenCalled();
        });
      });

      describe('if the focused input has changed', () => {
        it('should call `props.onFocusChange` with the right arguments', () => {
          const onFocusChange = jest.fn();
          const previousFocusedInput = 'startDate';
          const focusedInput = 'endDate';
          const wrapper = getWrappedDateRangePicker({
            onFocusChange,
          });

          wrapper.setState({ focusedInput });
          onFocusChange.mockClear();
          getIsFocusControlled.mockReturnValueOnce(false);
          wrapper
            .instance()
            .componentDidUpdate({}, { focusedInput: previousFocusedInput });

          expect(onFocusChange).toHaveBeenCalledWith(focusedInput);
        });
      });
    });
  });

  describe('`componentWillUnmount`', () => {
    it('should call `global.removeEventListener` with the right arguments', () => {
      global.removeEventListener = jest.fn();
      const wrapper = getWrappedDateRangePicker();

      wrapper.instance().componentWillUnmount();
      expect(global.removeEventListener).toHaveBeenCalledWith(
        'resize',
        wrapper.instance().handleHeightChange
      );
    });
  });

  describe('`handleFocusChange`', () => {
    it('should call `isDisplayedAsModal` with the right arguments', () => {
      const wrapper = getWrappedDateRangePicker();

      isDisplayedAsModal.mockClear();
      wrapper.instance().handleFocusChange();

      expect(isDisplayedAsModal).toHaveBeenCalledWith(
        wrapper.state('windowHeight')
      );
    });

    describe('if `isDisplayedAsModal` returns `false`', () => {
      it('should call `getIsVisible` with the right arguments', () => {
        const wrapper = getWrappedDateRangePicker();

        getIsVisible.mockClear();
        isDisplayedAsModal.mockReturnValueOnce(false);
        wrapper.instance().handleFocusChange();

        expect(getIsVisible).toHaveBeenCalledWith(
          wrapper.instance().visibilityCheck
        );
      });
    });

    describe('if `getIsVisible` returns `false`', () => {
      it('should not call `getIsFocusControlled`', () => {
        const wrapper = getWrappedDateRangePicker();

        getIsFocusControlled.mockClear();
        isDisplayedAsModal.mockReturnValueOnce(false);
        getIsVisible.mockReturnValueOnce(false);
        wrapper.instance().handleFocusChange();

        expect(getIsFocusControlled).not.toHaveBeenCalled();
      });
    });

    describe('if `isDisplayedAsModal` returns `true`', () => {
      it('should call `getIsFocusControlled` with the right arguments', () => {
        const focusedInput = 'endDate';
        const wrapper = getWrappedDateRangePicker({ focusedInput });

        getIsFocusControlled.mockClear();
        isDisplayedAsModal.mockReturnValueOnce(true);
        wrapper.instance().handleFocusChange();

        expect(getIsFocusControlled).toHaveBeenCalledWith(focusedInput);
      });
    });

    describe('if `getIsVisible` returns `true`', () => {
      it('should not call `getIsFocusControlled`', () => {
        const focusedInput = 'endDate';
        const wrapper = getWrappedDateRangePicker({ focusedInput });

        getIsFocusControlled.mockClear();
        isDisplayedAsModal.mockReturnValueOnce(false);
        getIsVisible.mockReturnValueOnce(true);
        wrapper.instance().handleFocusChange();

        expect(getIsFocusControlled).toHaveBeenCalledWith(focusedInput);
      });
    });

    describe('if `getIsFocusControlled` returns `true`', () => {
      it('should call `props.onFocusChange` with the right arguments', () => {
        const onFocusChange = jest.fn();
        const focusedInput = 'startDate';
        const wrapper = getWrappedDateRangePicker({ onFocusChange });

        isDisplayedAsModal.mockReturnValueOnce(true);
        getIsFocusControlled.mockReturnValueOnce(true);
        wrapper.instance().handleFocusChange(focusedInput);

        expect(onFocusChange).toHaveBeenCalledWith(focusedInput);
      });
    });

    describe('if `getIsFocusControlled` returns `false`', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getWrappedDateRangePicker();
        const focusedInput = 'startDate';

        isDisplayedAsModal.mockReturnValueOnce(true);
        getIsFocusControlled.mockReturnValueOnce(false);
        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().handleFocusChange(focusedInput);

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          focusedInput,
        });
      });
    });
  });

  describe('handleHeightChange', () => {
    it('should be debounced', () => {
      const debouncedFunction = () => {};

      debounce.mockReturnValueOnce(debouncedFunction);

      const wrapper = getWrappedDateRangePicker();
      const actual = wrapper.instance().handleHeightChange;

      expect(actual).toBe(debouncedFunction);
    });

    describe('if window height has changed', () => {
      it('should persist the value in component state', () => {
        const dateRangePicker = getWrappedDateRangePicker();

        dateRangePicker.instance().handleHeightChange();
        const actual = dateRangePicker.state();

        expect(actual).toEqual(
          expect.objectContaining({
            windowHeight: NEXT_WINDOW_HEIGHT,
          })
        );
      });
    });

    describe('if window height has not changed', () => {
      it('should do nothing', () => {
        getWindowHeight.mockReset();
        getWindowHeight.mockReturnValue(STARTING_WINDOW_HEIGHT);

        const dateRangePicker = getWrappedDateRangePicker();

        dateRangePicker.instance().handleHeightChange();
        const actual = dateRangePicker.state();

        expect(actual).toEqual(
          expect.objectContaining({
            windowHeight: STARTING_WINDOW_HEIGHT,
          })
        );
      });
    });
  });

  describe('`render`', () => {
    it('should call `getIsFocusControlled` with the right arguments', () => {
      const focusedInput = 'endDate';
      const wrapper = getWrappedDateRangePicker({ focusedInput });

      getIsFocusControlled.mockClear();
      wrapper.instance().render();

      expect(getIsFocusControlled).toHaveBeenCalledWith(focusedInput);
    });

    describe('if `getIsFocusControlled` returns `true`', () => {
      it('should render the right structure', () => {
        getIsFocusControlled.mockReturnValueOnce(true);
        const wrapper = getDateRangePicker();

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `getIsFocusControlled` returns `false`', () => {
      it('should render the right structure', () => {
        getIsFocusControlled.mockReturnValueOnce(false);
        const wrapper = getDateRangePicker();

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `isLoading` set `true`', () => {
      it('should render the textPlaceholder', () => {
        const wrapper = getDateRangePicker({ isLoading: true });

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  it('should have displayName `DateRangePicker`', () => {
    const component = shallow(<DateRangePicker />).prop('as');

    expectComponentToHaveDisplayName(component, 'DateRangePicker');
  });
});
