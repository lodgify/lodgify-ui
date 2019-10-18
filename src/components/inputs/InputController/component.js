import React, { cloneElement, createRef } from 'react';
import {
  array,
  bool,
  string,
  oneOfType,
  element,
  number,
  object,
  func,
} from 'prop-types';
import cx from 'classnames';
import { Input } from 'semantic-ui-react';

import { returnFirstArgument } from 'utils/return-first-argument';

import { ErrorMessage } from '../ErrorMessage';

import { getValueFromEvent } from './utils/getValueFromEvent';

const ICON_POSITION = 'left';

export const Component = ({
  adaptOnChangeEvent,
  children,
  error,
  icon,
  inputOnChangeFunctionName,
  isCompact,
  isFocused,
  isFluid,
  isValid,
  mapValueToProps,
  name,
  onChange,
  value,
}) => {
  const showError = !!error && typeof error === 'string';
  const inputRef = createRef();
  const handleChange = (...args) => {
    onChange(adaptOnChangeEvent(...args));
  };

  return (
    <Input
      className={cx({
        dirty: !!value,
        compact: isCompact,
        error: !!error,
        focus: isFocused,
        valid: isValid,
      })}
      fluid={isFluid}
      iconPosition={icon && ICON_POSITION}
      name={name}
      value={value}
    >
      {cloneElement(children, {
        [inputOnChangeFunctionName]: handleChange,
        ref: inputRef,
        ...mapValueToProps(value),
      })}
      {showError && <ErrorMessage errorMessage={error} />}
      {icon}
    </Input>
  );
};

Component.displayName = 'InputController';
Component.propTypes = {
  /** A function called to adapt the child input `onChange` event to a value.  */
  adaptOnChangeEvent: func,
  /** The input controlled by the input controller */
  children: element.isRequired,
  /** Is input in an error state. */
  error: oneOfType([bool, string]),
  /** An icon to display in the input */
  icon: element,
  /** The name of the change function on the input, if not `onChange`.  */
  inputOnChangeFunctionName: string,
  /** Is the input only taking up as much space as necessary. */
  isCompact: bool,
  /** Does the input fill the width of its container. */
  isFluid: bool,
  /** Is input in a focused state. */
  isFocused: bool,
  /** Is input in a valid state. */
  isValid: bool,
  mapValueToProps: func,
  /** The name for the input. */
  name: string.isRequired,
  /**
   * A function called when a change in the input value is handled by the input controller.
   * @param {String} name
   * @param {String} value
   * @param {Object} nativeEvent
   */
  onChange: func,
  /** The current value of the input where it is consumed as a controlled component. */
  value: oneOfType([bool, string, number, object, array]),
};
Component.defaultProps = {
  adaptOnChangeEvent: getValueFromEvent,
  inputOnChangeFunctionName: 'onChange',
  isCompact: false,
  isValid: false,
  isFocused: false,
  error: false,
  isFluid: false,
  icon: null,
  onChange: returnFirstArgument,
  value: null,
  mapValueToProps: value => ({ value }),
};
