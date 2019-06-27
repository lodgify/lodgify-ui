import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { InputController } from '../InputController';

import { mapValueToProps } from './utils/mapValueToProps';
import { adaptOnChangeEvent } from './utils/adaptOnChangeEvent';

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  error,
  isChecked,
  isCompact,
  isDisabled,
  isFluid,
  isLabelLeft,
  isRadioButton,
  isToggle,
  label,
  name,
  onChange,
  onClick,
}) => (
  <InputController
    adaptOnChangeEvent={adaptOnChangeEvent}
    error={error}
    isCompact={isCompact}
    isFluid={isFluid}
    isValid={false}
    mapValueToProps={mapValueToProps}
    name={name}
    onChange={onChange}
    value={isChecked}
  >
    <Checkbox
      className={getClassNames({
        'is-label-left': isLabelLeft,
        'is-fluid': isFluid,
      })}
      disabled={isDisabled}
      label={label}
      onClick={onClick}
      radio={isRadioButton}
      toggle={isToggle}
    />
  </InputController>
);

Component.displayName = 'Checkbox';

Component.defaultProps = {
  error: false,
  isChecked: undefined,
  isCompact: false,
  isDisabled: false,
  isFluid: false,
  isLabelLeft: false,
  isToggle: false,
  isRadioButton: false,
  label: '',
  name: '',
  onChange: Function.prototype,
  onClick: Function.prototype,
};

Component.propTypes = {
  /** Is the checkbox input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the checkbox checked. */
  isChecked: PropTypes.bool,
  /** Is the checkbox only taking up as much space as necessary. */
  isCompact: PropTypes.bool,
  /** Is the checkbox disabled. */
  isDisabled: PropTypes.bool,
  /** The checkbox fills the width of its parent. */
  isFluid: PropTypes.bool,
  /** Is the label on the left hand side of the checkbox. */
  isLabelLeft: PropTypes.bool,
  /** Is the checkbox formatted as a radio button. Prefer using the <RadioButton> component instead */
  isRadioButton: PropTypes.bool,
  /** Format to show an on or off choice. */
  isToggle: PropTypes.bool,
  /** The label for the checkbox */
  label: PropTypes.node,
  /** The HTML input name. */
  name: PropTypes.string,
  /**
   * Event called when the checkbox value changes.
   * @param {String} name
   * @param {boolean} value
   */
  onChange: PropTypes.func,
  /**
   * Event called when the checkbox is clicked.
   * @param {Object} event
   */
  onClick: PropTypes.func,
};
