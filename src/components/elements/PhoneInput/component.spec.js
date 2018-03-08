import React from 'react';
import { shallow } from 'enzyme';
import Phone from 'react-phone-number-input';

import { Component as PhoneInput } from './component';

describe.only('<PhoneInput />', () => {
  it('should have displayName "PhoneInput"', () => {
    const displayName = PhoneInput.displayName;
    expect(displayName).toBe('PhoneInput');
  });

  it('should have a single `Phone` child component', () => {
    const phoneInput = shallow(<PhoneInput />);
    const thirdPartyPhoneInput = phoneInput.find(Phone);
    expect(thirdPartyPhoneInput).toHaveLength(1);
  });

  it('should pass the right props to child component', () => {
    const PHONE_NUMBER = '+12025550104';
    const PROPS = {
      value: PHONE_NUMBER,
      placeholder: 'Enter phone number',
      country: 'US',
    };
    const phoneInput = shallow(<PhoneInput isDisabled {...PROPS} />);
    const thirdPartyPhoneInput = phoneInput.find(Phone);
    expect(thirdPartyPhoneInput.props()).toMatchObject({
      disabled: true,
      ...PROPS,
    });
    expect(thirdPartyPhoneInput.prop('isDisabled')).not.toBeDefined();
  });

  it('should pass the right props to child component', () => {
    const PHONE_NUMBER = '33546';
    const handleChange = jest.fn();
    const phoneInput = shallow(<PhoneInput onChange={handleChange} />);
    phoneInput.setState({ value: PHONE_NUMBER });
    expect(handleChange).toHaveBeenCalledWith(PHONE_NUMBER);
  });
});
