import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'semantic-ui-react/dist/commonjs/modules/Checkbox';

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  isDisabled,
  isChecked,
  isCheckedByDefault,
  isRadioButton,
  isToggle,
  label,
  name,
  onChange,
}) => (
  <Checkbox
    checked={isChecked}
    defaultChecked={isCheckedByDefault}
    disabled={isDisabled}
    label={label}
    name={name}
    onChange={(event, { checked }) => onChange(name, checked)}
    radio={isRadioButton}
    toggle={isToggle}
  />
);

Component.displayName = 'Checkbox';

Component.defaultProps = {
  isChecked: undefined,
  isCheckedByDefault: undefined,
  isDisabled: false,
  isToggle: false,
  isRadioButton: false,
  label: '',
  name: '',
  onChange: Function.prototype,
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
  /** Format to show an on or off choice. */
  isToggle: PropTypes.bool,
  /** The label for the checkbox */
  label: PropTypes.string,
  /** The HTML input name. */
  name: PropTypes.string,
  /**
   * Event called when the checkbox value changes.
   * @param {String} name
   * @param{boolean} value
   */
  onChange: PropTypes.func,
};
