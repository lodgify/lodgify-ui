import React from 'react';
import { shallow, mount } from 'enzyme';
import Phone from 'react-phone-number-input';

import { InputController } from '../InputController';

import { Component as PhoneInput } from './component';

describe('<PhoneInput />', () => {
  it('should have displayName "PhoneInput"', () => {
    const displayName = PhoneInput.displayName;
    expect(displayName).toBe('PhoneInput');
  });

  it('should have a single `InputControler` child component', () => {
    const phoneInput = shallow(<PhoneInput />);
    const thirdPartyPhoneInput = phoneInput.find(InputController);
    expect(thirdPartyPhoneInput).toHaveLength(1);
  });

  it('should pass the right props to the third-party component', () => {
    const PHONE_NUMBER = '+12025550104';
    const COUNTRY = 'US';
    const PLACEHOLDER = 'I want your phone number';
    const ALLOWED_COUNTRIES = ['US', 'CA'];
    const phoneInput = mount(
      <PhoneInput
        label={PLACEHOLDER}
        defaultCountryCode={COUNTRY}
        defaultValue={PHONE_NUMBER}
        countries={ALLOWED_COUNTRIES}
      />
    );
    const thirdPartyPhoneInput = phoneInput.find(Phone);
    expect(thirdPartyPhoneInput.props()).toMatchObject({
      country: COUNTRY,
      placeholder: PLACEHOLDER,
      value: PHONE_NUMBER,
      countries: ALLOWED_COUNTRIES,
    });
    expect(thirdPartyPhoneInput.prop('isDisabled')).not.toBeDefined();
    expect(thirdPartyPhoneInput.prop('defaultCountryCode')).not.toBeDefined();
  });
});
