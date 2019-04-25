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
jest.mock('lodash/debounce');
jest.mock('lodash/uniqueId');
jest.mock('./utils/getIsFocusControlled');

import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import { debounce, uniqueId } from 'lodash';

import { getWindowHeight } from 'utils/get-window-height';
import { isBlurEvent } from 'utils/is-blur-event';

import { getIsFocusControlled } from './utils/getIsFocusControlled';
import { ComponentWithResponsive as DateRangePicker } from './component';

const STARTING_WINDOW_HEIGHT = 900;
const NEXT_WINDOW_HEIGHT = 800;

const getDateRangePicker = extraProps =>
  mount(<DateRangePicker {...extraProps} />);
const getWrappedDateRangePicker = props => {
  const Child = shallow(<DateRangePicker />).prop('as');

  return shallow(<Child {...props} />);
};

uniqueId.mockImplementation(value => value);

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

    it('should call `debounce` with the right arguments', () => {
      const wrapper = getWrappedDateRangePicker();
      const handler = wrapper.instance().handleHeightChange;

      expect(debounce).toHaveBeenCalledWith(handler, 150);
    });

    it('should bind handleHeightChange to global resize event', () => {
      global.addEventListener = jest.fn();
      const wrapper = getWrappedDateRangePicker();

      debounce.mockReturnValueOnce(wrapper.instance().handleHeightChange, 150);

      wrapper.instance().componentDidMount();
      expect(global.addEventListener).toHaveBeenCalledWith(
        'resize',
        debounce()
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

  describe('`handleFocusChange`', () => {
    it('should call `getIsFocusControlled` with the right arguments', () => {
      const focusedInput = 'endDate';
      const wrapper = getWrappedDateRangePicker({ focusedInput });

      getIsFocusControlled.mockClear();
      wrapper.instance().handleFocusChange();

      expect(getIsFocusControlled).toHaveBeenCalledWith(focusedInput);
    });

    describe('if `getIsFocusControlled` returns `true`', () => {
      it('should call `props.onFocusChange` with the right arguments', () => {
        const onFocusChange = jest.fn();
        const focusedInput = 'startDate';
        const wrapper = getWrappedDateRangePicker({ onFocusChange });

        getIsFocusControlled.mockReturnValueOnce(true);
        wrapper.instance().handleFocusChange(focusedInput);

        expect(onFocusChange).toHaveBeenCalledWith(focusedInput);
      });
    });

    describe('if `getIsFocusControlled` returns `false`', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getWrappedDateRangePicker();
        const focusedInput = 'startDate';

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

  describe('Interaction: onHeightChange', () => {
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
  });

  it('should have displayName `DateRangePicker`', () => {
    const component = shallow(<DateRangePicker />).prop('as');

    expectComponentToHaveDisplayName(component, 'DateRangePicker');
  });
});
