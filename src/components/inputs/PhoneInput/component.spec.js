import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
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
    const inputController = getInputController();
    const actual = inputController.props();
    expect(actual).toEqual(
      expect.objectContaining({
        error: false,
        icon: expect.any(Object),
        isValid: false,
        label: '',
        name: '',
        onChange: expect.any(Function),
      })
    );
  });

  it('should pass an html `input` as a child to `InputController`', () => {
    const inputController = getInputController();
    const actual = inputController.children('input');
    expect(actual).toHaveLength(1);
  });

  describe('the child `input`', () => {
    it('should get the right props', () => {
      const inputController = getInputController();
      const actual = inputController.children('input').props();
      expect(actual).toEqual(
        expect.objectContaining({
          type: 'text',
          value: '',
        })
      );
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
