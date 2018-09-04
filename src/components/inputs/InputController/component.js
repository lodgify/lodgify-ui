import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEqual, some } from 'lodash';
import { Input } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getHasErrorMessage } from 'utils/get-has-error-message';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { ErrorMessage } from '../ErrorMessage';

import { getValue } from './utils/getValue';

/**
 * Shared controller for input elements.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    value: '',
  };

  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    const { name, onChange } = this.props;

    !isEqual(prevValue, value) && onChange(name, value);
  }

  handleChange = eventOrValue => {
    const value = getValue(eventOrValue);

    this.setState({ value });
  };

  /**
   * Force focus the input when the dynamic label is clicked.
   */
  handleClick = () => this.htmlInput.focus();

  render() {
    const { value } = this.state;
    const isDirty = some(value);
    const {
      children,
      error,
      icon,
      inputOnChangeFunctionName,
      isFocused,
      isValid,
      label,
    } = this.props;
    const hasErrorMessage = getHasErrorMessage(error);

    return (
      <Input
        className={getClassNames({
          dirty: isDirty,
          valid: isValid,
          error: error,
          focus: isFocused,
        })}
        iconPosition={icon && 'left'}
      >
        {hasErrorMessage && <ErrorMessage errorMessage={error} />}
        {isValid && <Icon color="green" name={ICON_NAMES.CHECKMARK} />}
        {React.cloneElement(children, {
          [inputOnChangeFunctionName]: this.handleChange,
          ref: input => (this.htmlInput = input),
        })}
        {label && <label onClick={this.handleClick}>{label}</label>}
        {icon}
      </Input>
    );
  }
}

Component.displayName = 'InputController';

Component.defaultProps = {
  icon: null,
  inputOnChangeFunctionName: 'onChange',
  isFocused: false,
  label: null,
};

Component.propTypes = {
  /** The input controlled by the input controller */
  children: PropTypes.element.isRequired,
  /** Is input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  /** An icon to display in the input */
  icon: PropTypes.element,
  /** The name of the change function on the input, if not `onChange`.  */
  inputOnChangeFunctionName: PropTypes.string,
  /** Is input in a focused state. */
  isFocused: PropTypes.bool,
  /** Is input in a valid state. */
  isValid: PropTypes.bool.isRequired,
  /** The visible label for the input. */
  label: PropTypes.string,
  /** The name for the input. */
  name: PropTypes.string.isRequired,
  /**
   * A function called when a change in the input value is handled by the input controller.
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func.isRequired,
};
