import React from 'react';
import PropTypes from 'prop-types';

import { InputController } from '../InputController';

/**
 * A text input can get short text data from a user.
 * @return {Object}
 */
export const Component = ({ error, isValid, label, onChange }) => (
  <InputController
    type="input"
    error={error}
    isValid={isValid}
    label={label}
    onChange={onChange}
    changeValueTransformer={event => event.target.value}
  />
);

Component.displayName = 'TextInput';

Component.defaultProps = {
  error: false,
  isValid: false,
  label: '',
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the text input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the text input in a valid state. */
  isValid: PropTypes.bool,
  /** The label for the text input. */
  label: PropTypes.string,
  /** A function called when the text input value changes. */
  onChange: PropTypes.func,
};
