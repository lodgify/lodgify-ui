import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

/**
 * The standard widget for owner sign up.
 * @returns {Object}
 */
export const Component = ({ onSubmit }) => (
  <Form
    headingText="Owner Signup"
    onSubmit={onSubmit}
    submitButtonText="Sign up"
  >
    <TextInput label="First Name" name="firstName" />
    <TextInput label="Last Name" name="lastName" />
    <TextInput label="Email" name="email" />
  </Form>
);

Component.displayName = 'OwnerSignUp';

Component.defaultProps = {
  onSubmit: Function.prototype,
};

Component.propTypes = {
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
};
