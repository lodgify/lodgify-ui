import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { ErrorMessage } from '../ErrorMessage';

import { hasErrorMessage } from './hasErrorMessage';

/**
 * Shared controller for TextInput and TextArea.
 * @extends React.PureComponent
 */
export class Component extends PureComponent {
  state = {
    value: '',
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * Call the onChange function passed down via props
   * with the new state value
   */
  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    prevValue !== value && this.props.onChange(value);
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * Persist the value in component state
   */
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * Force focus the input when the dynamic label is clicked.
   */
  handleClick = () => this.htmlInput.focus();

  render() {
    const { value } = this.state;
    const { isValid, error, label, type } = this.props;
    return (
      <Input
        className={getClassNames({
          dirty: value,
          valid: isValid,
          error: error,
        })}
      >
        {hasErrorMessage(error) && <ErrorMessage errorMessage={error} />}
        {React.createElement(type, {
          onChange: this.handleChange,
          ref: input => (this.htmlInput = input),
          rows: 8,
        })}
        {label && <label onClick={this.handleClick}>{label}</label>}
      </Input>
    );
  }
}

Component.displayName = 'InputController';

Component.propTypes = {
  /** Is input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  /** Is input in a valid state. */
  isValid: PropTypes.bool.isRequired,
  /** The label for the input. */
  label: PropTypes.string.isRequired,
  /** A function called when the input value changes. */
  onChange: PropTypes.func.isRequired,
  /** The type of input to be rendered. */
  type: PropTypes.oneOf(['input', 'textarea']).isRequired,
};
