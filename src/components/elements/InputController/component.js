import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    value: '',
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * Call the onChange function passed down via props
   * with the new state value
   */
  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    const { name, onChange } = this.props;
    prevValue !== value && onChange(name, value);
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
    const { isValid, error, label, tagName, type } = this.props;
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
        {React.createElement(tagName, {
          onChange: this.handleChange,
          ref: input => (this.htmlInput = input),
          rows: 8,
          type,
        })}
        {label && <label onClick={this.handleClick}>{label}</label>}
      </Input>
    );
  }
}

Component.displayName = 'InputController';

Component.defaultProps = {
  type: null,
};

Component.propTypes = {
  /** Is input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  /** Is input in a valid state. */
  isValid: PropTypes.bool.isRequired,
  /** The visible label for the input. */
  label: PropTypes.string.isRequired,
  /** The name for the input. */
  name: PropTypes.string.isRequired,
  /**
   * A function called when the input value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func.isRequired,
  /** The HTML tagName of the input to be rendered. */
  tagName: PropTypes.oneOf(['input', 'textarea']).isRequired,
  /** The [HTML input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types). */
  type: PropTypes.string,
};
