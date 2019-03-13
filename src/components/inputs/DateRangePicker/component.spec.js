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
jest.mock('lodash/debounce');

import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import { debounce } from 'lodash';

import { getWindowHeight } from 'utils/get-window-height';

import { ComponentWithResponsive as DateRangePicker } from './component';

const STARTING_WINDOW_HEIGHT = 900;
const NEXT_WINDOW_HEIGHT = 800;

const getDateRangePicker = () => mount(<DateRangePicker />);
const getWrappedDateRangePicker = props => {
  const Child = shallow(<DateRangePicker />).prop('as');

  return shallow(<Child {...props} />);
};

describe('<DateRangePicker />', () => {
  beforeEach(() => {
    getWindowHeight.mockReset();
    getWindowHeight.mockReturnValueOnce(STARTING_WINDOW_HEIGHT);
    getWindowHeight.mockReturnValueOnce(NEXT_WINDOW_HEIGHT);
  });

  it('should render the right structure', () => {
    const wrapper = getDateRangePicker();

    expect(wrapper).toMatchSnapshot();
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

  describe('Interaction: onFocusChange', () => {
    it('should persist the value in component state', () => {
      const value = 'startDate';
      const dateRangePicker = getWrappedDateRangePicker();

      dateRangePicker.instance().handleFocusChange(value);
      const actual = dateRangePicker.state();

      expect(actual).toEqual(
        expect.objectContaining({
          focusedInput: value,
        })
      );
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

  describe('State change: focusedInput', () => {
    describe('if there is a blur event', () => {
      it('should call `props.onBlur`', () => {
        const onBlur = jest.fn();
        const dateRangePicker = getWrappedDateRangePicker({ onBlur });

        const prevState = { focusedInput: 'startDate' };
        const state = { focusedInput: null };

        dateRangePicker.setState(prevState);
        dateRangePicker.setState(state);

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('if there is no blur event', () => {
      it('should not call `props.onBlur`', () => {
        const onBlur = jest.fn();
        const dateRangePicker = getWrappedDateRangePicker({ onBlur });

        const prevState = { focusedInput: null };
        const state = { focusedInput: null };

        dateRangePicker.setState(prevState);
        dateRangePicker.setState(state);

        expect(onBlur).not.toHaveBeenCalled();
      });
    });

    describe('if the focused input has changed', () => {
      it('should call `props.onFocusChange` with the right arguments', () => {
        const onFocusChange = jest.fn();
        const dateRangePicker = getWrappedDateRangePicker({ onFocusChange });

        const testCases = [
          { previousFocusedInput: null, focusedInput: 'startDate' },
          { previousFocusedInput: null, focusedInput: 'endDate' },
          { previousFocusedInput: 'startDate', focusedInput: null },
          { previousFocusedInput: 'startDate', focusedInput: 'endDate' },
          { previousFocusedInput: 'endDate', focusedInput: null },
          { previousFocusedInput: 'endDate', focusedInput: 'startDate' },
        ];

        testCases.forEach(({ previousFocusedInput, focusedInput }) => {
          const prevState = { focusedInput: previousFocusedInput };
          const state = { focusedInput };

          dateRangePicker.setState(prevState);
          onFocusChange.mockClear();
          dateRangePicker.setState(state);

          expect(onFocusChange).toHaveBeenCalledWith(focusedInput);
        });
      });
    });

    describe('if the focused input has not changed', () => {
      it('should not call `props.onFocusChange`', () => {
        const onFocusChange = jest.fn();
        const dateRangePicker = getWrappedDateRangePicker({ onFocusChange });

        const testCases = [
          { previousFocusedInput: null, focusedInput: null },
          { previousFocusedInput: 'startDate', focusedInput: 'startDate' },
          { previousFocusedInput: 'endDate', focusedInput: 'endDate' },
        ];

        testCases.forEach(({ previousFocusedInput, focusedInput }) => {
          const prevState = { focusedInput: previousFocusedInput };
          const state = { focusedInput };

          dateRangePicker.setState(prevState);
          onFocusChange.mockClear();
          dateRangePicker.setState(state);

          expect(onFocusChange).not.toHaveBeenCalled();
        });
      });
    });
  });

  it('should have displayName `DateRangePicker`', () => {
    const component = shallow(<DateRangePicker />).prop('as');

    expectComponentToHaveDisplayName(component, 'DateRangePicker');
  });
});
