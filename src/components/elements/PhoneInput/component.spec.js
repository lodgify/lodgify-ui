import React from 'react';
import { shallow } from 'enzyme';
import Phone from 'react-phone-number-input';

import { Component as PhoneInput } from './component';

describe('<PhoneInput />', () => {
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
    const COUNTRY = 'US';
    const PLACEHOLDER = 'I want your phone number';
    const phoneInput = shallow(
      <PhoneInput
        isDisabled
        label={PLACEHOLDER}
        defaultCountryCode={COUNTRY}
        value={PHONE_NUMBER}
        defaultCountryCode={COUNTRY}
      />
    );
    const thirdPartyPhoneInput = phoneInput.find(Phone);
    expect(thirdPartyPhoneInput.props()).toMatchObject({
      disabled: true,
      country: COUNTRY,
      placeholder: PLACEHOLDER,
      value: PHONE_NUMBER,
    });
    expect(thirdPartyPhoneInput.prop('isDisabled')).not.toBeDefined();
    expect(thirdPartyPhoneInput.prop('defaultCountryCode')).not.toBeDefined();
  });

  it('should call the function passed as `props.onChange`', () => {
    const PHONE_NUMBER = '33546';
    const handleChange = jest.fn();
    const phoneInput = shallow(<PhoneInput onChange={handleChange} />);
    phoneInput.setState({ value: PHONE_NUMBER });
    expect(handleChange).toHaveBeenCalledWith(PHONE_NUMBER);
  });
});
