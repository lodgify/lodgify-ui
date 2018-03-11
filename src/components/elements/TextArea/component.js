import React from 'react';
import PropTypes from 'prop-types';

import { InputController } from '../InputController';

/**
 * A text area can get longer text data from a user.
 * @return {Object}
 */
export const Component = ({ error, isValid, label, onChange }) => (
  <InputController
    type="textarea"
    error={error}
    isValid={isValid}
    label={label}
    onChange={onChange}
    changeValueTransformer={event => event.target.value}
    rows="8"
  />
);

Component.displayName = 'TextArea';

Component.defaultProps = {
  error: false,
  isValid: false,
  label: '',
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the text area in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the text area in a valid state. */
  isValid: PropTypes.bool,
  /** The label for the text area. */
  label: PropTypes.string,
  /** A function called when the text area value changes. */
  onChange: PropTypes.func,
};
