import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as PhoneInput } from './component';

const getPhoneInput = props => shallow(<PhoneInput {...props} />);

describe('<PhoneInput />', () => {
  it('should render the right structure', () => {
    const wrapper = mount(<PhoneInput />);

    expect(wrapper).toMatchSnapshot();
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
