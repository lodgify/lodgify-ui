import React, { PureComponent } from 'react';
import Phone from 'react-phone-number-input';
import PropTypes from 'prop-types';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import './component.css';

/**
 * A phone input allows a user to enter a phone number.
 * @param  {Object} props
 * @return {Object}
 * */
export class Component extends PureComponent {
  state = {
    phoneNumber: this.props.phone,
  };

  render = () => {
    const { phoneNumber } = this.state;
    const { isDisabled } = this.props;
    return (
      <Phone
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={phoneNumber => this.setState({ phoneNumber })}
        inputClassName="MAAT"
        disabled={isDisabled}
      />
    );
  };
}

Component.defaultProps = {
  phone: '',
  country: '',
  isDisabled: false,
};

Component.propTypes = {
  /** Phone number */
  phone: PropTypes.string,
  /** Handler for when the phone number is changed */
  onChange: PropTypes.func.isRequired,
  /** Is the input disabled */
  isDisabled: PropTypes.bool,
  /** Default country (two-letter country code)
   * For local (non-international) phone numbers. */
  country: PropTypes.string,
};

Component.displayName = 'PhoneInput';
