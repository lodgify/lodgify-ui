import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import { getIsInputValueReset } from 'utils/get-is-input-value-reset';
import { getControlledInputValue } from 'utils/get-controlled-input-value';

import { InputController } from '../InputController';

import { parseValue } from './utils/parseValue';
import { INITIAL_VALUE } from './constants';
import { getIconOrFlag } from './utils/getIconOrFlag';

/**
 * A phone input allows a user to enter a phone number.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    country: undefined,
    value: INITIAL_VALUE,
  };

  componentDidUpdate(previousProps, previousState) {
    if (getIsInputValueReset(previousProps.value, this.props.value)) {
      this.setState({ country: undefined, value: INITIAL_VALUE });
      return;
    }

    const { value } = this.state;
    const { name, onChange } = this.props;

    !isEqual(previousState.value, value) && onChange(name, value);
  }

  handleChange = (name, value) => {
    const { country, phone } = parseValue(value);

    this.setState({ country, value: phone });
  };

  render() {
    const {
      autoComplete,
      error,
      isValid,
      label,
      maxCharacters,
      name,
      onBlur,
    } = this.props;
    const { country } = this.state;
    const value = getControlledInputValue(
      this.props.value,
      INITIAL_VALUE,
      this.state.value
    );

    return (
      <InputController
        error={error}
        icon={getIconOrFlag(country)}
        isValid={isValid}
        label={label}
        name={name}
        onChange={this.handleChange}
        value={value}
      >
        <input
          autoComplete={autoComplete}
          maxLength={maxCharacters}
          onBlur={onBlur}
          type="tel"
        />
      </InputController>
    );
  }
}

Component.displayName = 'PhoneInput';

Component.defaultProps = {
  autoComplete: null,
  error: false,
  isValid: false,
  label: '',
  maxCharacters: null,
  name: '',
  onBlur: Function.prototype,
  onChange: Function.prototype,
  value: undefined,
};

Component.propTypes = {
  /** Can the phone input be completed automatically by the browser. See [MDN docs for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete). */
  autoComplete: PropTypes.string,
  /** Is the phone input in an error state. A string is displayed as an error message. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the phone input in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the phone input. */
  label: PropTypes.string,
  /** The maximum amount of characters accepted by the input. */
  maxCharacters: PropTypes.number,
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
