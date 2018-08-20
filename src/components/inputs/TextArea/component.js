import React from 'react';
import PropTypes from 'prop-types';

import { InputController } from '../InputController';

/**
 * A text area can get longer text data from a user.
 * @return {Object}
 */
export const Component = ({
  error,
  isValid,
  label,
  name,
  onBlur,
  onChange,
}) => (
  <InputController
    error={error}
    isValid={isValid}
    label={label}
    name={name}
    onChange={onChange}
  >
    <textarea onBlur={onBlur} rows="8" />
  </InputController>
);

Component.displayName = 'TextArea';

Component.defaultProps = {
  error: false,
  isValid: false,
  label: '',
  name: '',
  onBlur: Function.prototype,
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the text area in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the text area in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the text area. */
  label: PropTypes.string,
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
};
