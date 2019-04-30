import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import { InputController } from '../InputController';

import { mapValueToProps } from './utils/mapValueToProps';
import { adaptOnChangeEvent } from './utils/adaptOnChangeEvent';

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  error,
  isDisabled,
  isChecked,
  isRadioButton,
  isToggle,
  isValid,
  label,
  name,
  onChange,
}) => (
  <InputController
    adaptOnChangeEvent={adaptOnChangeEvent}
    error={error}
    isValid={isValid}
    label={label}
    mapValueToProps={mapValueToProps}
    name={name}
    onChange={onChange}
    value={isChecked}
  >
    <Checkbox disabled={isDisabled} radio={isRadioButton} toggle={isToggle} />
  </InputController>
);

Component.displayName = 'Checkbox';

Component.defaultProps = {
  error: false,
  isChecked: undefined,
  isDisabled: false,
  isToggle: false,
  isRadioButton: false,
  isValid: false,
  label: '',
  name: '',
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the checkbox input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the checkbox checked. */
  isChecked: PropTypes.bool,
  /** Is the checkbox disabled. */
  isDisabled: PropTypes.bool,
  /** Is the checkbox formatted as a radio button. Prefer using the <RadioButton> component instead */
  isRadioButton: PropTypes.bool,
  /** Format to show an on or off choice. */
  isToggle: PropTypes.bool,
  /** Is the checkbox in a valid state. */
  isValid: PropTypes.bool,
  /** The label for the checkbox */
  label: PropTypes.node,
  /** The HTML input name. */
  name: PropTypes.string,
  /**
   * Event called when the checkbox value changes.
   * @param {String} name
   * @param{boolean} value
   */
  onChange: PropTypes.func,
};
