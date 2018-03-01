import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @param {Object} props
 * @return {Object}
 * */
export const Component = props => (
  <Checkbox
    checked={props.isChecked}
    defaultChecked={props.isCheckedByDefault}
    disabled={props.isDisabled}
    label={props.label}
    name={props.name}
    onChange={props.onChange}
    radio={props.isRadioButton}
    value={props.value}
  />
);

Component.displayName = 'Checkbox';

Component.defaultProps = {
  // Notes: Use undefined for uncontrolled checkboxes, boolean for controlled ones.
  isChecked: undefined,
  isCheckedByDefault: undefined,
  isDisabled: false,
  isRadioButton: undefined,
  label: '',
  name: undefined,
  onChange: undefined,
  value: undefined,
};

Component.propTypes = {
  /** Is the checkbox checked. */
  isChecked: PropTypes.bool,
  /**
   * Is the checkbox initially checked.
   * This property is used only for uncontrolled checkboxes (when isChecked is not specified).
   * Refer to: https://reactjs.org/docs/uncontrolled-components.html
   * */
  isCheckedByDefault: PropTypes.bool,
  /** Is the checkbox disabled. */
  isDisabled: PropTypes.bool,
  /** Is the checkbox formatted as a radio button. Prefer using the <RadioButton> component instead */
  isRadioButton: PropTypes.bool,
  /** The label for the checkbox */
  label: PropTypes.string,
  /** The HTML input name. */
  name: PropTypes.string,
  /** The HTML input name. */
  name: PropTypes.string,
  /**
   * Event called when the user attempts to change the checked state.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: PropTypes.func,
  /** The HTML input value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
