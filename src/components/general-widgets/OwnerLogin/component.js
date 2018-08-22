import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';
import {
  EMAIL,
  FORGOT_PASSWORD,
  OWNER_LOGIN,
  PASSWORD,
  SEND_RESET,
  LOGIN,
} from 'utils/default-strings';

import { getForgotPasswordFormMarkup } from './utils/getForgotPasswordFormMarkup';

/**
 * The standard widget for owner login.
 * @returns {Object}
 */
export const Component = ({
  emailLabel,
  forgotPasswordButtonText,
  forgotPasswordEmailLabel,
  forgotPasswordHeadingText,
  forgotPasswordModelTriggerText,
  loginFormButtonText,
  loginFormHeadingText,
  onForgotPasswordSubmit,
  onSubmit,
  passwordLabel,
}) => (
  <Form
    actionLink={{
      text: getForgotPasswordFormMarkup(
        onForgotPasswordSubmit,
        forgotPasswordButtonText,
        forgotPasswordEmailLabel,
        forgotPasswordHeadingText,
        forgotPasswordModelTriggerText
      ),
    }}
    headingText={loginFormHeadingText}
    onSubmit={onSubmit}
    submitButtonText={loginFormButtonText}
  >
    <TextInput label={emailLabel} name="email" />
    <TextInput label={passwordLabel} name="password" type="password" />
  </Form>
);

Component.displayName = 'OwnerLogin';

Component.defaultProps = {
  emailLabel: EMAIL,
  forgotPasswordButtonText: SEND_RESET,
  forgotPasswordHeadingText: FORGOT_PASSWORD,
  forgotPasswordEmailLabel: EMAIL,
  forgotPasswordModelTriggerText: FORGOT_PASSWORD,
  loginFormButtonText: LOGIN,
  loginFormHeadingText: OWNER_LOGIN,
  onForgotPasswordSubmit: Function.prototype,
  onSubmit: Function.prototype,
  passwordLabel: PASSWORD,
};

Component.propTypes = {
  /** The login form heading text */
  emailLabel: PropTypes.string,
  /** The forgot password button text */
  forgotPasswordButtonText: PropTypes.string,
  /** The email label for forgot password */
  forgotPasswordEmailLabel: PropTypes.string,
  /** The forgot password heading text */
  forgotPasswordHeadingText: PropTypes.string,
  /** The trigger forgot password model text */
  forgotPasswordModelTriggerText: PropTypes.string,
  /** The login form button text */
  loginFormButtonText: PropTypes.string,
  /** The login form heading text */
  loginFormHeadingText: PropTypes.string,
  /** The function to call when the forgot password form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onForgotPasswordSubmit: PropTypes.func,
  /** The function to call when the login form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
  /** The password label */
  passwordLabel: PropTypes.string,
};
