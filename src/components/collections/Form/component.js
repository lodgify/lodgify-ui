import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import { Card, Form } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { Button } from 'elements/Button';

import { getValidationWithDefaults } from './utils/getValidationWithDefaults';
import { getIsRequiredError } from './utils/getIsRequiredError';
import { getIsValidError } from './utils/getIsValidError';
import { getFormChild } from './utils/getFormChild';

/**
 * A form displays a set of related user input fields in a structured way.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  state = {};

  handleInputBlur = name => {
    const validation = getValidationWithDefaults(this.props.validation[name]);
    const hasError = getIsRequiredError(validation, this.state[name]);

    hasError &&
      this.setState({ [name]: { error: validation.isRequiredMessage } });
  };

  handleInputChange = (name, value) => {
    const { invalidMessage, getIsValid } = getValidationWithDefaults(
      this.props.validation[name]
    );
    const isValid = getIsValid(value);
    const error = getIsValidError(value, isValid, invalidMessage);

    this.setState({ [name]: { error, isValid, value } });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render = () => {
    const { children, headingText, submitButtonText, actionLink } = this.props;

    return (
      <Card className="has-form" fluid>
        {headingText && (
          <Card.Content>
            <Heading>{headingText}</Heading>
          </Card.Content>
        )}
        <Card.Content>
          <Form onSubmit={this.handleSubmit}>
            {Children.map(children, child => getFormChild(child, this))}
            {actionLink && (
              <a onClick={actionLink.onClick}>{actionLink.text}</a>
            )}
            {submitButtonText && (
              <Button isPositionedRight>{submitButtonText}</Button>
            )}
          </Form>
        </Card.Content>
      </Card>
    );
  };
}

Component.displayName = 'Form';

Component.defaultProps = {
  headingText: null,
  onSubmit: Function.prototype,
  actionLink: null,
  submitButtonText: null,
  validation: {},
};

Component.propTypes = {
  /** An optional action link. */
  actionLink: PropTypes.shape({
    /** The function to call when the secondary call to action is clicked. */
    onClick: PropTypes.func,
    /** The visible text for the secondary call to action */
    text: PropTypes.node.isRequired,
  }),
  /** The child components and elements. */
  children: PropTypes.node.isRequired,
  /** The text to display as a heading at the top of the form. */
  headingText: PropTypes.string,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
  /** The text to display on the submit button. */
  submitButtonText: PropTypes.string,
  /** Settings for validating inputs. */
  validation: PropTypes.objectOf(
    PropTypes.shape({
      /** A function which checks whether the input is empty. Defaults to check for falsy value.
       *  @param  {Any}     value
       *  @return {Boolean}
       */
      getIsEmpty: PropTypes.func,
      /** A function which checks `value` and returns `true` if valid, `false` if invalid.
       *  @param  {Any}     value
       *  @return {Boolean}
       */
      getIsValid: PropTypes.func,
      /** An optional message to display if `getIsValid` returns `false`. */
      invalidMessage: PropTypes.string,
      /** Is the user required to enter a value into the input. */
      isRequired: PropTypes.bool,
      /** An optional message to display if `getIsValid` returns `false`. */
      isRequiredMessage: PropTypes.string,
    })
  ),
};
