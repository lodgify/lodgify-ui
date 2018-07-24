import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import { InputController } from '../InputController';

import { parseValue } from './utils/parseValue';
import { getIconOrFlag } from './utils/getIconOrFlag';

/**
 * A phone input allows a user to enter a phone number.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  state = {
    country: undefined,
    value: '',
  };

  /**
   * Call `props.onChange` with the new value from state.
   */
  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    const { name, onChange } = this.props;

    !isEqual(prevValue, value) && onChange(name, value);
  }

  /**
   * Parse the value, format if possible and persist in component state.
   */
  handleChange = (name, value) => {
    const { country, phone } = parseValue(value);

    this.setState({ country, value: phone });
  };

  render() {
    const { error, isValid, label, name } = this.props;
    const { country, value } = this.state;

    return (
      <InputController
        error={error}
        icon={getIconOrFlag(country)}
        isValid={isValid}
        label={label}
        name={name}
        onChange={this.handleChange}
      >
        <input type="text" value={value} />
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
