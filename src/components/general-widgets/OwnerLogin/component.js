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
import { VerticalGutters } from 'layout/VerticalGutters';

import { getForgotPasswordFormMarkup } from './utils/getForgotPasswordFormMarkup';

/**
 * The standard widget for owner login.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  emailInputLabel,
  forgotPasswordEmailInputLabel,
  forgotPasswordHeadingText,
  forgotPasswordModalTriggerText,
  forgotPasswordSubmitButtonText,
  forgotPasswordValidation,
  submitButtonText,
  headingText,
  onForgotPasswordSubmit,
  onSubmit,
  passwordInputLabel,
  validation,
}) => (
  <VerticalGutters>
    <Form
      actionLink={{
        text: getForgotPasswordFormMarkup(
          onForgotPasswordSubmit,
          forgotPasswordSubmitButtonText,
          forgotPasswordEmailInputLabel,
          forgotPasswordHeadingText,
          forgotPasswordModalTriggerText,
          forgotPasswordValidation
        ),
      }}
      headingText={headingText}
      onSubmit={onSubmit}
      submitButtonText={submitButtonText}
      validation={validation}
    >
      <TextInput label={emailInputLabel} name="email" />
      <TextInput label={passwordInputLabel} name="password" type="password" />
    </Form>
  </VerticalGutters>
);

Component.displayName = 'OwnerLogin';

Component.defaultProps = {
  emailInputLabel: EMAIL,
  forgotPasswordEmailInputLabel: EMAIL,
  forgotPasswordHeadingText: FORGOT_PASSWORD,
  forgotPasswordModalTriggerText: FORGOT_PASSWORD,
  forgotPasswordSubmitButtonText: SEND_RESET,
  forgotPasswordValidation: {},
  submitButtonText: LOGIN,
  headingText: OWNER_LOGIN,
  onForgotPasswordSubmit: Function.prototype,
  onSubmit: Function.prototype,
  passwordInputLabel: PASSWORD,
  validation: {},
};

Component.propTypes = {
  /** The label for the email input. */
  emailInputLabel: PropTypes.string,
  /** The label for the email input on the forgot password form. */
  forgotPasswordEmailInputLabel: PropTypes.string,
  /** The text to display as a heading at the top of the forgot password form. */
  forgotPasswordHeadingText: PropTypes.string,
  /** The text for the forgot password form modal trigger. */
  forgotPasswordModalTriggerText: PropTypes.string,
  /** The text to display on the submit button on the forgot password form.. */
  forgotPasswordSubmitButtonText: PropTypes.string,
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
  /** Settings for validating inputs. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  validation: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object,
  }),
};
