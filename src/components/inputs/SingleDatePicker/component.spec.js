import React from 'react';
import { shallow } from 'enzyme';
import { SingleDatePicker as ReactDatesSingleDatePicker } from 'react-dates';
import moment from 'moment';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { returnFirstArgument } from 'utils/return-first-argument';
import { InputController } from 'inputs/InputController';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { Component as SingleDatePicker } from './component';

const getSingleDatePicker = props => shallow(<SingleDatePicker {...props} />);

describe('<SingleDatePicker />', () => {
  it('should render a Semantic UI `InputController`', () => {
    const wrapper = getSingleDatePicker();

    expectComponentToBe(wrapper, InputController);
  });

  describe('the `InputController` component', () => {
    it('should get the right props', () => {
      const wrapper = getSingleDatePicker();

      expectComponentToHaveProps(wrapper, {
        adaptOnChangeEvent: returnFirstArgument,
        error: false,
        inputOnChangeFunctionName: 'onDateChange',
        isFocused: false,
        isValid: false,
        name: '',
        onChange: expect.any(Function),
      });
    });

    it('should get the right children', () => {
      const wrapper = getSingleDatePicker();

      expectComponentToHaveChildren(wrapper, ReactDatesSingleDatePicker);
    });
  });

  describe('the `react-dates` `SingleDatePicker`', () => {
    const getReactDatesSingleDatePicker = () =>
      getSingleDatePicker().find(ReactDatesSingleDatePicker);

    it('should get the right consumer defined props', () => {
      const wrapper = getReactDatesSingleDatePicker();

      expectComponentToHaveProps(wrapper, {
        displayFormat: 'DD/MM/YYYY',
        isDayBlocked: Function.prototype,
        openDirection: expect.any(String),
        placeholder: '',
      });
    });

    it('should get the right controlled props', () => {
      const wrapper = getReactDatesSingleDatePicker();

      expectComponentToHaveProps(wrapper, {
        date: null,
        focused: null,
        onDateChange: Function.prototype,
        onFocusChange: expect.any(Function),
      });
    });

    it('should get the right static custom appearance props', () => {
      const wrapper = getReactDatesSingleDatePicker();

      expectComponentToHaveProps(wrapper, {
        customInputIcon: <Icon name={ICON_NAMES.CALENDAR} />,
        daySize: 52,
        hideKeyboardShortcutsPanel: true,
        navNext: <Icon name={ICON_NAMES.ARROW_RIGHT} />,
        navPrev: <Icon name={ICON_NAMES.ARROW_LEFT} />,
        numberOfMonths: 1,
      });
    });
  });

  describe('Interaction: onChange', () => {
    it('should persist the value in component state', () => {
      const now = moment();
      const singleDatePicker = getSingleDatePicker();

      singleDatePicker.instance().handleInputControllerChange(undefined, now);
      const actual = singleDatePicker.state();

      expect(actual).toEqual(expect.objectContaining({ date: now }));
    });
  });

  describe('Interaction: onFocusChange', () => {
    it('should persist the value in component state', () => {
      const value = true;
      const singleDatePicker = getSingleDatePicker();

      singleDatePicker.instance().handleFocusChange({ focused: value });
      const actual = singleDatePicker.state();

      expect(actual).toEqual(
        expect.objectContaining({
          isFocused: value,
        })
      );
    });
  });

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const handleChange = jest.fn();
      const props = { name: 'winnie', onChange: handleChange };
      const date = moment();
      const newState = { date };
      const singleDatePicker = getSingleDatePicker(props);

      singleDatePicker.setState(newState);
      expect(handleChange).toHaveBeenCalledWith(
        props.name,
        expect.objectContaining(date)
      );
    });
  });

  describe('State change: focusedInput', () => {
    describe('if there is a blur event', () => {
      it('should call `props.onBlur`', () => {
        const onBlur = jest.fn();
        const singleDatePicker = getSingleDatePicker({ onBlur });

        const prevState = { isFocused: true };
        const state = { isFocused: false };

        singleDatePicker.setState(prevState);
        singleDatePicker.setState(state);

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('if there is a no blur event', () => {
      it('should note call `props.onBlur`', () => {
        const onBlur = jest.fn();
        const singleDatePicker = getSingleDatePicker({ onBlur });

        const prevState = { isFocused: false };
        const state = { isFocused: false };

        singleDatePicker.setState(prevState);
        singleDatePicker.setState(state);

        expect(onBlur).not.toHaveBeenCalled();
      });
    });
  });

  it('should have displayName `SingleDatePicker`', () => {
    expectComponentToHaveDisplayName(SingleDatePicker, 'SingleDatePicker');
  });
});
