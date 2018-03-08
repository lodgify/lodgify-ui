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
  state = { value: this.props.value };

  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    if (prevValue !== value) {
      this.props.onChange(value);
    }
  }

  /**
   * Persist the value in component state
   * @param {String} value
   * @return {void}
   */
  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { isDisabled, defaultCountryCode, label } = this.props;
    return (
      <Phone
        country={defaultCountryCode}
        disabled={isDisabled}
        onChange={this.handleChange}
        placeholder={label}
        value={value}
      />
    );
  }
}

Component.defaultProps = {
  defaultCountryCode: '',
  isDisabled: false,
  onChange: Function.prototype,
  label: '',
  value: '',
};

Component.propTypes = {
  /** Default [ISO alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
  defaultCountryCode: PropTypes.string,
  /** Is the input disabled */
  isDisabled: PropTypes.bool,
  /** Placeholder text for the phone input */
  label: PropTypes.string,
  /** Handler for when the phone number is changed */
  onChange: PropTypes.func,
  /** Phone number */
  value: PropTypes.string,
};

Component.displayName = 'PhoneInput';
