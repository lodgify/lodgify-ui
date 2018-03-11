import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Input, Icon } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { ErrorMessage } from '../ErrorMessage';

import { hasErrorMessage } from './hasErrorMessage';

/**
 * Shared controller for TextInput and TextArea.
 * @extends React.PureComponent
 */
export class Component extends PureComponent {
  state = {
    value: this.props.defaultValue || '',
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * Call the onChange function passed down via props
   * with the new state value
   */
  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    if (prevValue !== value) {
      this.props.onChange(value);
    }
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * Persist the value in component state
   */
  handleChange = newValue => {
    const { changeValueTransformer } = this.props;
    newValue = changeValueTransformer(newValue);
    this.setState({ value: newValue });
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * Force focus the input when the dynamic label is clicked.
   */
  handleClick = () => this.htmlInput.focus();

  render() {
    const { value } = this.state;
    const { isValid, error, label, type, ...otherProps } = this.props;
    const passedProperties = omit(otherProps, [
      'changeValueTransformer',
      'defaultValue',
    ]);
    return (
      <Input
        className={getClassNames({
          dirty: value,
          valid: isValid,
          error: error,
        })}
      >
        {hasErrorMessage(error) && <ErrorMessage errorMessage={error} />}
        {isValid && <Icon color="green" name="checkmark" size="big" />}
        {React.createElement(type, {
          ...passedProperties,
          ref: input => (this.htmlInput = input),
          value: value,
          onChange: this.handleChange,
        })}
        {label && <label onClick={this.handleClick}>{label}</label>}
      </Input>
    );
  }
}

Component.displayName = 'InputController';

Component.defaultProps = {
  changeValueTransformer: x => x, // identity function
  defaultValue: '',
  label: '',
};

Component.propTypes = {
  /** An optional adapter function to modify the value that the onChange handler will receive.*/
  changeValueTransformer: PropTypes.func,
  /** Input default value */
  defaultValue: PropTypes.string,
  /** Is input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  /** Is input in a valid state. */
  isValid: PropTypes.bool.isRequired,
  /** The label for the input. */
  label: PropTypes.string,
  /** A function called when the input value changes.
   * It takes the input's new value for first parameter.*/
  onChange: PropTypes.func.isRequired,
  /** The type of input to be rendered. */
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};
