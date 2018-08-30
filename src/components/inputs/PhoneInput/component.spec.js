import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { InputController } from '../InputController';

import { Component as PhoneInput } from './component';

const getPhoneInput = props => shallow(<PhoneInput {...props} />);

const getInputController = () => getPhoneInput().find('InputController');

describe('<PhoneInput />', () => {
  it('should render a single `InputController` component', () => {
    const wrapper = getPhoneInput();

    expectComponentToBe(wrapper, InputController);
  });

  it('should pass the right `props` to `InputController`', () => {
    const wrapper = getInputController();

    expectComponentToHaveProps(wrapper, {
      error: false,
      icon: expect.any(Object),
      isValid: false,
      label: '',
      name: '',
      onChange: expect.any(Function),
    });
  });

  it('should pass an html `input` as a child to `InputController`', () => {
    const wrapper = getInputController();

    expectComponentToHaveChildren(wrapper, 'input');
  });

  describe('the child `input`', () => {
    it('should get the right props', () => {
      const wrapper = getInputController().find('input');

      expectComponentToHaveProps(wrapper, {
        type: 'tel',
        value: '',
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

  it('should have displayName `PhoneInput`', () => {
    expectComponentToHaveDisplayName(PhoneInput, 'PhoneInput');
  });
});
