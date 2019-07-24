import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'fast-deep-equal';
import PhoneInput from 'react-phone-number-input';

import { getIsInputValueReset } from 'utils/get-is-input-value-reset';
import { getControlledInputValue } from 'utils/get-controlled-input-value';

import { InputController } from '../InputController';

import { INITIAL_VALUE, COUNTRY_OPTIONS, DEFAULT_COUNTRY } from './constants';
import { FlagComponent } from './utils/FlagComponent';
import { CountrySelectComponent } from './utils/CountrySelectComponent';
import { getLabels } from './utils/getLabels';

/**
 * A phone input allows a user to enter a phone number.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    labels: getLabels(this.props.countryNames),
    value: INITIAL_VALUE,
  };

  componentDidUpdate(previousProps, previousState) {
    if (getIsInputValueReset(previousProps.value, this.props.value)) {
      this.setState({ value: INITIAL_VALUE });
      return;
    }

    const { value } = this.state;
    const { name, onChange } = this.props;

    !isEqual(previousState.value, value) && onChange(name, value);
  }

  handleChange = (name, value) => this.setState({ value });

  render() {
    const {
      autoComplete,
      error,
      initialCountryValue,
      isValid,
      label,
      name,
      onBlur,
    } = this.props;
    const value = getControlledInputValue(
      this.props.value,
      INITIAL_VALUE,
      this.state.value
    );

    return (
      <InputController
        error={error}
        isValid={isValid}
        label={label}
        name={name}
        onChange={this.handleChange}
        value={value}
      >
        <PhoneInput
          autoComplete={autoComplete}
          country={initialCountryValue}
          countryOptions={COUNTRY_OPTIONS}
          countrySelectComponent={CountrySelectComponent}
          flagComponent={FlagComponent}
          labels={this.state.labels}
          onBlur={onBlur}
        />
      </InputController>
    );
  }
}

Component.displayName = 'PhoneInput';

Component.defaultProps = {
  autoComplete: 'off',
  error: false,
  countryNames: {},
  initialCountryValue: DEFAULT_COUNTRY,
  isValid: false,
  label: '',
  name: '',
  onBlur: Function.prototype,
  onChange: Function.prototype,
  value: undefined,
};

Component.propTypes = {
  /** Can the phone input be completed automatically by the browser. See [MDN docs for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete). */
  autoComplete: PropTypes.string,
  /** A dictionary of custom names for countries in the dropdown. Keyed by [two-letter ISO country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
  countryNames: PropTypes.objectOf(PropTypes.string),
  /** Is the phone input in an error state. A string is displayed as an error message. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** The initial value of the country input. Must be a [two-letter ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
  initialCountryValue: PropTypes.string,
  /** Is the phone input in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the phone input. */
  label: PropTypes.string,
  /** The name for the phone input. */
  name: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * A function called when the phone input value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
  /** The current value of the input where it is consumed as a controlled component. */
  value: PropTypes.string,
};
