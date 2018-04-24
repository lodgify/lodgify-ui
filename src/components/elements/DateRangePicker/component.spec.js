import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker as ReactDatesDateRangePicker } from 'react-dates';
import { Responsive } from 'semantic-ui-react';
import moment from 'moment';

import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from 'lib/expect-helpers';
import { InputController } from 'elements/InputController';
import { Icon } from 'elements/Icon';

import { ComponentWithResponsive as DateRangePicker } from './component';

const getDateRangePicker = () => shallow(<DateRangePicker />);
const getWrappedDateRangePicker = props => {
  const Child = getDateRangePicker().prop('as');
  return shallow(<Child {...props} />);
};

describe('<DateRangePicker />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getDateRangePicker();
    expectComponentToBe(wrapper, Responsive);
  });

  describe('the wrapped `DateRangePicker` component', () => {
    it('should be a Semantic UI `InputController`', () => {
      const wrapper = getWrappedDateRangePicker();
      expectComponentToBe(wrapper, InputController);
    });
  });

  describe('the `InputController` component', () => {
    const getInputController = () =>
      getWrappedDateRangePicker().find(InputController);

    it('should get the right props', () => {
      const wrapper = getInputController();
      expectComponentToHaveProps(wrapper, {
        error: false,
        inputOnChangeFunctionName: 'onDatesChange',
        isFocused: false,
        isValid: false,
        name: '',
        onChange: expect.any(Function),
      });
    });

    it('should get the right children', () => {
      const wrapper = getInputController();
      expectComponentToHaveChildren(wrapper, ReactDatesDateRangePicker);
    });
  });

  describe('the `react-dates` `DateRangePicker`', () => {
    const getReactDatesDateRangePicker = () =>
      getWrappedDateRangePicker().find(ReactDatesDateRangePicker);

    it('should get the right consumer defined props', () => {
      const wrapper = getReactDatesDateRangePicker();
      expectComponentToHaveProps(wrapper, {
        displayFormat: 'DD/MM/YYYY',
        endDatePlaceholderText: '',
        isDayBlocked: Function.prototype,
        startDatePlaceholderText: '',
      });
    });

    it('should get the right controlled props', () => {
      const wrapper = getReactDatesDateRangePicker();
      expectComponentToHaveProps(wrapper, {
        endDate: null,
        focusedInput: null,
        onDatesChange: Function.prototype,
        onFocusChange: expect.any(Function),
        startDate: null,
      });
    });

    it('should get the right static required props', () => {
      const wrapper = getReactDatesDateRangePicker();
      expectComponentToHaveProps(wrapper, {
        endDateId: expect.stringContaining('end_date_id_'),
        startDateId: expect.stringContaining('start_date_id_'),
      });
    });

    it('should get the right static custom appearance props', () => {
      const wrapper = getReactDatesDateRangePicker();
      expectComponentToHaveProps(wrapper, {
        customArrowIcon: <Icon name="arrow right" />,
        customInputIcon: <Icon name="calendar" />,
        daySize: 52,
        hideKeyboardShortcutsPanel: true,
        navNext: <Icon name="arrow right" />,
        navPrev: <Icon name="arrow left" />,
        numberOfMonths: ReactDatesDateRangePicker.defaultProps.numberOfMonths,
      });
    });
  });

  describe('Interaction: onChange', () => {
    it('should persist the value in component state', () => {
      const now = moment();
      const value = { startDate: now };
      const dateRangePicker = getWrappedDateRangePicker();
      dateRangePicker.instance().handleInputControllerChange(undefined, value);
      const actual = dateRangePicker.state();
      expect(actual).toEqual(expect.objectContaining(value));
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

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const handleChange = jest.fn();
      const props = { name: 'winnie', onChange: handleChange };
      const newState = { endDate: null, startDate: moment() };
      const dateRangePicker = getWrappedDateRangePicker(props);
      dateRangePicker.setState(newState);
      expect(handleChange).toHaveBeenCalledWith(
        props.name,
        expect.objectContaining(newState)
      );
    });
  });

  it('should have displayName `DateRangePicker`', () => {
    const component = getDateRangePicker().prop('as');
    expectComponentToHaveDisplayName(component, 'DateRangePicker');
  });
});
