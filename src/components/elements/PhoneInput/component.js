import React from 'react';
import Phone from 'react-phone-number-input';
import PropTypes from 'prop-types';

import { InputController } from '../InputController';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
// import './component.css';

/**
 * A phone input allows a user to enter a phone number.
 * @return {Object}
 * */
export const Component = ({
  error,
  isValid,
  countries,
  label,
  onChange,
  defaultValue,
  defaultCountryCode,
}) => (
  <InputController
    type={Phone}
    error={error}
    isValid={isValid}
    placeholder={label}
    onChange={onChange}
    defaultValue={defaultValue}
    inputClassName="inner-input"
    country={defaultCountryCode}
    countries={countries}
  />
);

Component.defaultProps = {
  countries: undefined,
  defaultCountryCode: '',
  defaultValue: null,
  error: '',
  isValid: false,
  onChange: Function.prototype,
  label: '',
};

Component.propTypes = {
  /** List of allowed countries*/
  countries: PropTypes.arrayOf(PropTypes.string),
  /** Default [ISO alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
  defaultCountryCode: PropTypes.string,
  /** Is input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is input in a valid state. */
  isValid: PropTypes.bool,
  /** Placeholder text for the phone input */
  label: PropTypes.string,
  /** Handler for when the phone number is changed */
  onChange: PropTypes.func,
  /** Default input value */
  defaultValue: PropTypes.string,
};

Component.displayName = 'PhoneInput';
