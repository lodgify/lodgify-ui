import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Flag } from 'semantic-ui-react';

import { InputController } from '../InputController';

/**
 * A phone input allows a user to enter a phone number.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  render() {
    const { error, isValid, label, name, onChange } = this.props;
    return (
      <InputController
        error={error}
        icon={<Flag name="ad" />}
        isValid={isValid}
        label={label}
        name={name}
        onChange={onChange}
      >
        <input type="text" />
      </InputController>
    );
  }
}

Component.displayName = 'PhoneInput';

Component.defaultProps = {
  error: false,
  isValid: false,
  label: '',
  name: '',
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the phone input in an error state. A string is displayed as an error message. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Is the phone input in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the phone input. */
  label: PropTypes.string,
  /** The name for the phone input. */
  name: PropTypes.string,
  /**
   * A function called when the phone input value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
};
