import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

import { getForgotPasswordFormMarkup } from './utils/getForgotPasswordFormMarkup';

/**
 * The standard widget for owner login.
 * @returns {Object}
 */
export const Component = ({ onForgotPasswordSubmit, onSubmit }) => (
  <Form
    actionLink={{
      text: getForgotPasswordFormMarkup(onForgotPasswordSubmit),
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
  onForgotPasswordSubmit: Function.prototype,
  onSubmit: Function.prototype,
};

Component.propTypes = {
  /** The function to call when the forgot password form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onForgotPasswordSubmit: PropTypes.func,
  /** The function to call when the login form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
};
