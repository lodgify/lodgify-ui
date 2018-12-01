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
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  emailInputLabel,
  errorMessage,
  forgotPasswordEmailInputLabel,
  forgotPasswordErrorMessage,
  forgotPasswordHeadingText,
  forgotPasswordModalTriggerText,
  forgotPasswordSubmitButtonText,
  forgotPasswordSuccessMessage,
  forgotPasswordValidation,
  headingText,
  onForgotPasswordSubmit,
  onSubmit,
  passwordInputLabel,
  submitButtonText,
  successMessage,
  validation,
}) => (
  <Form
    actionLink={{
      text: getForgotPasswordFormMarkup(
        onForgotPasswordSubmit,
        forgotPasswordSubmitButtonText,
        forgotPasswordEmailInputLabel,
        forgotPasswordHeadingText,
        forgotPasswordModalTriggerText,
        forgotPasswordValidation,
        forgotPasswordErrorMessage,
        forgotPasswordSuccessMessage
      ),
    }}
    errorMessage={errorMessage}
    headingText={headingText}
    onSubmit={onSubmit}
    submitButtonText={submitButtonText}
    successMessage={successMessage}
    validation={validation}
  >
    <TextInput autoComplete="email" label={emailInputLabel} name="email" />
    <TextInput
      autoComplete="current-password"
      label={passwordInputLabel}
      name="password"
      type="password"
    />
  </Form>
);

Component.displayName = 'OwnerLogin';

Component.defaultProps = {
  emailInputLabel: EMAIL,
  errorMessage: '',
  forgotPasswordEmailInputLabel: EMAIL,
  forgotPasswordErrorMessage: '',
  forgotPasswordHeadingText: FORGOT_PASSWORD,
  forgotPasswordModalTriggerText: FORGOT_PASSWORD,
  forgotPasswordSubmitButtonText: SEND_RESET,
  forgotPasswordSuccessMessage: '',
  forgotPasswordValidation: {},
  headingText: OWNER_LOGIN,
  onForgotPasswordSubmit: Function.prototype,
  onSubmit: Function.prototype,
  passwordInputLabel: PASSWORD,
  submitButtonText: LOGIN,
  successMessage: '',
  validation: {},
};

Component.propTypes = {
  /** The label for the email input. */
  emailInputLabel: PropTypes.string,
  /** The message to display when the form has an error. */
  errorMessage: PropTypes.string,
  /** The label for the email input on the forgot password form. */
  forgotPasswordEmailInputLabel: PropTypes.string,
  /** The message to display when the forgot password form has an error. */
  forgotPasswordErrorMessage: PropTypes.string,
  /** The text to display as a heading at the top of the forgot password form. */
  forgotPasswordHeadingText: PropTypes.string,
  /** The text for the forgot password form modal trigger. */
  forgotPasswordModalTriggerText: PropTypes.string,
  /** The text to display on the submit button on the forgot password form. */
  forgotPasswordSubmitButtonText: PropTypes.string,
  /** The message to display when the forgot password form is successful. */
  forgotPasswordSuccessMessage: PropTypes.string,
  /** Settings for validating inputs on the forgot password form. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  forgotPasswordValidation: PropTypes.shape({
    email: PropTypes.object,
  }),
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The function to call when the forgot password form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onForgotPasswordSubmit: PropTypes.func,
  /** The function to call when the login form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
  /** The label for the password input. */
  passwordInputLabel: PropTypes.string,
  /** The text to display on the submit button. */
  submitButtonText: PropTypes.string,
  /** The message to display when the form is successful. */
  successMessage: PropTypes.string,
  /** Settings for validating inputs. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  validation: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object,
  }),
};
