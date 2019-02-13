jest.mock('utils/get-is-input-value-reset');
jest.mock('utils/get-controlled-input-value');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { getIsInputValueReset } from 'utils/get-is-input-value-reset';
import { getControlledInputValue } from 'utils/get-controlled-input-value';

import { Component as PhoneInput } from './component';
import { INITIAL_VALUE } from './constants';

const getPhoneInput = props => shallow(<PhoneInput {...props} />);

describe('<PhoneInput />', () => {
  it('should render the right structure', () => {
    const wrapper = mount(<PhoneInput />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('`componentDidUpdate`', () => {
    it('should call `getIsInputValueReset` with the right arguments', () => {
      const PROPS_VALUE = '🌴';
      const PREVIOUS_PROPS_VALUE = '🌲';
      const wrapper = getPhoneInput({ value: PROPS_VALUE });

      wrapper
        .instance()
        .componentDidUpdate({ value: PREVIOUS_PROPS_VALUE }, {});

      expect(getIsInputValueReset).toHaveBeenCalledWith(
        PREVIOUS_PROPS_VALUE,
        PROPS_VALUE
      );
    });

    describe('if `getIsInputValueReset` returns `true`', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getPhoneInput();

        getIsInputValueReset.mockReturnValueOnce(true);

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidUpdate({}, {});

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          country: undefined,
          value: INITIAL_VALUE,
        });
      });

      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getPhoneInput({ onChange });

        getIsInputValueReset.mockReturnValueOnce(true);

        wrapper
          .instance()
          .componentDidUpdate({}, { value: 'some changed value' });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `getIsInputValueReset` returns `false`', () => {
      it('should not call `setState`', () => {
        const wrapper = getPhoneInput();

        getIsInputValueReset.mockReturnValueOnce(false);

        wrapper.instance().setState = jest.fn();
        wrapper.update();
        wrapper.instance().componentDidUpdate({}, {});

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });
  });

  describe('Interaction: onChange', () => {
    it('should persist the value in component state', () => {
      const value = '🐸';
      const wrapper = getPhoneInput();
      const input = wrapper.find('InputController');

      input.simulate('change', undefined, value);
      const actual = wrapper.state('value');

      expect(actual).toBe(value);
    });
  });

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const value = 'someValue';
      const handleChange = jest.fn();
      const wrapper = getPhoneInput({ onChange: handleChange });

      wrapper.setState({ value });
      expect(handleChange).toHaveBeenCalledWith('', value);
    });
  });

  describe('`render`', () => {
    it('should call `getControlledInputValue` with the right arguments', () => {
      const PROPS_VALUE = '🎅';
      const STATE_VALUE = '😎';
      const wrapper = getPhoneInput({ value: PROPS_VALUE });

      wrapper.setState({ value: STATE_VALUE });
      wrapper.instance().render();

      expect(getControlledInputValue).toHaveBeenCalledWith(
        PROPS_VALUE,
        INITIAL_VALUE,
        STATE_VALUE
      );
    });
  });

  it('should have displayName `PhoneInput`', () => {
    expectComponentToHaveDisplayName(PhoneInput, 'PhoneInput');
  });
});
