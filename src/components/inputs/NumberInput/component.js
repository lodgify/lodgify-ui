import React from 'react';
import PropTypes from 'prop-types';

import { InputController } from '../InputController';

/**
 * A number input can get number data from a user.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  autoComplete,
  error,
  isValid,
  label,
  max,
  min,
  name,
  onBlur,
  onChange,
  value,
}) => (
  <InputController
    error={error}
    isValid={isValid}
    label={label}
    name={name}
    onChange={onChange}
    value={value}
  >
    <input
      autoComplete={autoComplete}
      max={max}
      min={min}
      name={name}
      onBlur={onBlur}
      type="number"
    />
  </InputController>
);

Component.displayName = 'NumberInput';

Component.defaultProps = {
  autoComplete: null,
  error: false,
  isValid: false,
  label: '',
  min: undefined,
  max: undefined,
  name: '',
  onBlur: Function.prototype,
  onChange: Function.prototype,
  value: undefined,
};

Component.propTypes = {
  /** Can the number input be completed automatically by the browser. See [MDN docs for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete). */
  autoComplete: PropTypes.string,
  /** Is the number input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the number input in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the number input. */
  label: PropTypes.string,
  /** The maximum value the input accepts. */
  max: PropTypes.number,
  /** The minimum value the input accepts. */
  min: PropTypes.number,
  /** The name for the number input. */
  name: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * A function called when the number input value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
  /** The current value of the input where it is consumed as a controlled component. */
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
};
