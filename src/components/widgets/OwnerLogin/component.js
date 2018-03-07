import React from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../collections/Form';
import { TextInput } from '../../elements/TextInput';

export const Component = ({ onClickForgotPassword, onSubmit }) => (
  <Form
    actionLink={{
      onClick: onClickForgotPassword,
      text: 'Forgot password?',
    }}
    headingText="Owner Login"
    onSubmit={onSubmit}
    submitButtonText="Log in"
  >
    <TextInput label="Email" name="email" />
    <TextInput label="Password" name="password" type="password" />
  </Form>
);

Component.displayName = 'OwnerLogin';

Component.defaultProps = {
  onClickForgotPassword: Function.prototype,
  onSubmit: Function.prototype,
};

Component.propTypes = {
  /** The function to call when the form is submitted
   *  @param {Object} event
   */
  onClickForgotPassword: PropTypes.func,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
};
