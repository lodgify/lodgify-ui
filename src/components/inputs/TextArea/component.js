import React from 'react';
import PropTypes from 'prop-types';

import { InputController } from '../InputController';

/**
 * A text area can get longer text data from a user.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  autoComplete,
  error,
  isValid,
  label,
  name,
  onBlur,
  onChange,
  value,
  maxCharacters,
}) => (
  <InputController
    error={error}
    isValid={isValid}
    label={label}
    name={name}
    onChange={onChange}
    value={value}
  >
    <textarea
      autoComplete={autoComplete}
      maxLength={maxCharacters}
      onBlur={onBlur}
      rows="8"
    />
  </InputController>
);

Component.displayName = 'TextArea';

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
  /** Can the text area be completed automatically by the browser. See [MDN docs for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete). */
  autoComplete: PropTypes.string,
  /** Is the text area in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the text area in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the text area. */
  label: PropTypes.string,
  /** The maximum amount of characters accepted by the input. */
  maxCharacters: PropTypes.number,
  /** The name for the text area. */
  name: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * A function called when the text area value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
  /** The current value of the input where it is consumed as a controlled component. */
  value: PropTypes.string,
};
