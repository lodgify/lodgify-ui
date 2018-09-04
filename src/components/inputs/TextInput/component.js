import React from 'react';
import PropTypes from 'prop-types';

import { InputController } from '../InputController';

/**
 * A text input can get short text data from a user.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  error,
  isValid,
  label,
  name,
  onBlur,
  onChange,
  type,
}) => (
  <InputController
    error={error}
    isValid={isValid}
    label={label}
    name={name}
    onChange={onChange}
  >
    <input onBlur={onBlur} type={type} />
  </InputController>
);

Component.displayName = 'TextInput';

Component.defaultProps = {
  error: false,
  isValid: false,
  label: '',
  name: '',
  onBlur: Function.prototype,
  onChange: Function.prototype,
  type: 'text',
};

Component.propTypes = {
  /** Is the text input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the text input in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the text input. */
  label: PropTypes.string,
  /** The name for the text input. */
  name: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * A function called when the text input value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
  /** The [HTML input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types). */
  type: PropTypes.string,
};
