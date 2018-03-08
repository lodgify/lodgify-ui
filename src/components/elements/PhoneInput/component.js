import React, { PureComponent } from 'react';
import Phone from 'react-phone-number-input';
import PropTypes from 'prop-types';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import './component.css';

/**
 * A phone input allows a user to enter a phone number.
 * @return {Object}
 * */
export class Component extends PureComponent {
  state = { phoneNumber: this.props.value };

  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    if (prevValue !== value) {
      this.props.onChange(value);
    }
  }

  /**
   * Persist the value in component state
   * @param {String} phoneNumber
   * @return {void}
   */
  handleChange = phoneNumber => {
    this.setState({ phoneNumber });
  };

  render() {
    const { phoneNumber } = this.state;
    const { isDisabled, country, placeholder } = this.props;
    return (
      <Phone
        country={country}
        disabled={isDisabled}
        onChange={this.handleChange}
        placeholder={placeholder}
        value={phoneNumber}
      />
    );
  }
}

Component.defaultProps = {
  value: '',
  country: '',
  isDisabled: false,
  onChange: Function.prototype,
  placeholder: 'Enter phone number',
};

Component.propTypes = {
  /** Default country (two-letter country code)
   * For local (non-international) phone numbers. */
  country: PropTypes.string,
  /** Is the input disabled */
  isDisabled: PropTypes.bool,
  /** Handler for when the phone number is changed */
  onChange: PropTypes.func,
  /** Placeholder text for the phone input */
  placeholder: PropTypes.string,
  /** Phone number */
  value: PropTypes.string,
};

Component.displayName = 'PhoneInput';
