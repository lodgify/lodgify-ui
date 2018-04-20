import React from 'react';
import { shallow } from 'enzyme';
import { DateRangePicker as ReactDatesDateRangePicker } from 'react-dates';
import moment from 'moment';

import { Icon } from 'elements/Icon';

import { Component as DateRangePicker } from './component';

const getDateRangePicker = props => shallow(<DateRangePicker {...props} />);

const getInputController = () => getDateRangePicker().find('InputController');

const getReactDatesDateRangePicker = () =>
  getDateRangePicker().find(ReactDatesDateRangePicker);

describe('<DateRangePicker />', () => {
  it('should render a single `InputController` component', () => {
    const textInput = getDateRangePicker();
    const actual = textInput.find('InputController').length;
    expect(actual).toBe(1);
  });

  it('should pass the right `props` to `InputController`', () => {
    const inputController = getInputController();
    const actual = inputController.props();
    expect(actual).toEqual(
      expect.objectContaining({
        error: false,
        inputOnChangeFunctionName: 'onDatesChange',
        isFocused: false,
        isValid: false,
        name: '',
        onChange: expect.any(Function),
      })
    );
  });

  it('should pass a `react-dates` `DateRangePicker` as a child to `InputController`', () => {
    const inputController = getInputController();
    const actual = inputController.children(ReactDatesDateRangePicker);
    expect(actual).toHaveLength(1);
  });

  describe('the child `react-dates` `DateRangePicker`', () => {
    it('should get the right consumer defined props', () => {
      const reactDatesDateRangePicker = getReactDatesDateRangePicker();
      const actual = reactDatesDateRangePicker.props();
      expect(actual).toEqual(
        expect.objectContaining({
          displayFormat: 'DD/MM/YYYY',
          endDatePlaceholderText: '',
          isDayBlocked: Function.prototype,
          startDatePlaceholderText: '',
        })
      );
    });

    it('should get the right controlled props', () => {
      const reactDatesDateRangePicker = getReactDatesDateRangePicker();
      const actual = reactDatesDateRangePicker.props();
      expect(actual).toEqual(
        expect.objectContaining({
          endDate: null,
          focusedInput: null,
          onDatesChange: Function.prototype,
          onFocusChange: expect.any(Function),
          startDate: null,
        })
      );
    });

    it('should get the right static required props', () => {
      const reactDatesDateRangePicker = getReactDatesDateRangePicker();
      const actual = reactDatesDateRangePicker.props();
      expect(actual).toEqual(
        expect.objectContaining({
          endDateId: expect.stringContaining('end_date_id_'),
          startDateId: expect.stringContaining('start_date_id_'),
        })
      );
    });

    it('should get the right static custom appearance props', () => {
      const reactDatesDateRangePicker = getReactDatesDateRangePicker();
      const actual = reactDatesDateRangePicker.props();
      expect(actual).toEqual(
        expect.objectContaining({
          customArrowIcon: <Icon name="arrow right" />,
          customInputIcon: <Icon name="calendar" />,
          daySize: 52,
          hideKeyboardShortcutsPanel: true,
          navNext: <Icon name="arrow right" />,
          navPrev: <Icon name="arrow left" />,
        })
      );
    });
  });

  describe('Interaction: onChange', () => {
    it('should persist the value in component state', () => {
      const now = moment();
      const value = { startDate: now };
      const dateRangePicker = shallow(<DateRangePicker />);
      dateRangePicker.instance().handleInputControllerChange(undefined, value);
      const actual = dateRangePicker.state();
      expect(actual).toEqual(expect.objectContaining(value));
    });
  });

  describe('Interaction: onFocusChange', () => {
    it('should persist the value in component state', () => {
      const value = 'startDate';
      const dateRangePicker = shallow(<DateRangePicker />);
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
      const dateRangePicker = getDateRangePicker(props);
      dateRangePicker.setState(newState);
      expect(handleChange).toHaveBeenCalledWith(
        props.name,
        expect.objectContaining(newState)
      );
    });
  });

  it('should have displayName `DateRangePicker`', () => {
    const actual = DateRangePicker.displayName;
    expect(actual).toBe('DateRangePicker');
  });
});
