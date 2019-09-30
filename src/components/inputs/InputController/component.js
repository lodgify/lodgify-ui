import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import getClassNames from 'classnames';
import isEqual from 'fast-deep-equal';

import { getIsInputValueReset } from 'utils/get-is-input-value-reset';
import { getControlledInputValue } from 'utils/get-controlled-input-value';
import { getHasErrorMessage } from 'utils/get-has-error-message';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { some } from 'utils/some';

import { ErrorMessage } from '../ErrorMessage';

import { getValueFromEvent } from './utils/getValueFromEvent';

/**
 * Shared controller for input elements.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    value: getControlledInputValue(this.props.value, this.props.initialValue),
  };

  componentDidUpdate(previousProps, previousState) {
    if (getIsInputValueReset(previousProps.value, this.props.value)) {
      this.setState({ value: this.props.initialValue });
      return;
    }

    const { value } = this.state;
    const { name, onChange } = this.props;

    if (previousProps.value !== this.props.value) {
      const value = getControlledInputValue(
        this.props.value,
        this.props.initialValue,
        this.state.value
      );

      this.setState({ value });
      return;
    }

    !isEqual(previousState.value, value) && onChange(name, value);
  }

  handleChange = (...args) => {
    const value = this.props.adaptOnChangeEvent(...args);

    this.setState({ value });
  };

  render() {
    const {
      children,
      error,
      icon,
      inputOnChangeFunctionName,
      isCompact,
      isFluid,
      isFocused,
      isValid,
      label,
      mapValueToProps,
    } = this.props;

    const { value } = this.state;

    const hasErrorMessage = getHasErrorMessage(error);

    return (
      <Input
        className={getClassNames({
          compact: isCompact,
          dirty:
            some(value) || some(this.props.value || this.props.initialValue),
          error: error,
          focus: isFocused,
          valid: isValid,
        })}
        fluid={isFluid}
        iconPosition={icon && 'left'}
      >
        {React.cloneElement(children, {
          [inputOnChangeFunctionName]: this.handleChange,
          ref: input => (this.htmlInput = input),
          placeholder: label,
          ...mapValueToProps(value),
        })}
        {hasErrorMessage && <ErrorMessage errorMessage={error} />}
        {isValid && <Icon color="green" name={ICON_NAMES.CHECKMARK} />}
        {icon}
      </Input>
    );
  }
}

Component.displayName = 'InputController';

Component.defaultProps = {
  adaptOnChangeEvent: getValueFromEvent,
  icon: null,
  initialValue: '',
  inputOnChangeFunctionName: 'onChange',
  isCompact: false,
  isFluid: false,
  isFocused: false,
  label: null,
  mapValueToProps: value => ({ value }),
  value: undefined,
};

Component.propTypes = {
  /** A function called to adapt the child input `onChange` event to a value.  */
  adaptOnChangeEvent: PropTypes.func,
  /** The input controlled by the input controller */
  children: PropTypes.element.isRequired,
  /** Is input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  /** An icon to display in the input */
  icon: PropTypes.element,
  /** The value of the input on first render when it is consumed as a controlled component. */
  // eslint-disable-next-line react/forbid-prop-types
  initialValue: PropTypes.any,
  /** The name of the change function on the input, if not `onChange`.  */
  inputOnChangeFunctionName: PropTypes.string,
  /** Is the input only taking up as much space as necessary. */
  isCompact: PropTypes.bool,
  /** Does the input fill the width of its container. */
  isFluid: PropTypes.bool,
  /** Is input in a focused state. */
  isFocused: PropTypes.bool,
  /** Is input in a valid state. */
  isValid: PropTypes.bool.isRequired,
  /** The visible label for the input. */
  label: PropTypes.node,
  /**
   * A function which maps the value persisted in the input controller state to the props passed to the input.
   * @param  {any} value
   * @return {Object}
   */
  mapValueToProps: PropTypes.func,
  /** The name for the input. */
  name: PropTypes.string.isRequired,
  /**
   * A function called when a change in the input value is handled by the input controller.
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func.isRequired,
  /** The current value of the input where it is consumed as a controlled component. */
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
};
