import React, { PureComponent, Children } from 'react';
import PropTypes from 'prop-types';
import { Card, Form } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { Button } from 'elements/Button';

import { getInputWidth } from './getInputWidth';

/**
 * A form displays a set of related user input fields in a structured way.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  state = {};

  persistInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  cloneFormGroup = formGroup =>
    formGroup &&
    React.cloneElement(formGroup, {
      children: Children.map(formGroup.props.children, this.cloneInput),
      widths: 'equal',
    });

  cloneInput = input =>
    input &&
    React.createElement(Form.Field, {
      children: React.cloneElement(input, {
        onChange: (name, value) => {
          this.persistInputChange(name, value);
          input.props.onChange && input.props.onChange(name, value);
        },
      }),
      width: getInputWidth(input),
    });

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
            {Children.map(
              children,
              child =>
                child && child.type === Form.Group
                  ? this.cloneFormGroup(child)
                  : this.cloneInput(child)
            )}
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
};
