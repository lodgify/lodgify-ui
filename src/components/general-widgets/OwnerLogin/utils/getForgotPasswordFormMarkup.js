import React from 'react';

import { Form } from 'collections/Form';
import { Modal } from 'elements/Modal';
import { TextInput } from 'inputs/TextInput';

/**
 * @param  {Function}  onForgotPasswordSubmit
 * @param  {string}    forgotPasswordSubmitButtonText
 * @param  {string}    forgotPasswordEmailInputLabel
 * @param  {string}    forgotPasswordHeadingText
 * @param  {string}    forgotPasswordModalTriggerText
 * @param  {Object}    forgotPasswordValidation
 * @param  {string}    forgotPasswordErrorMessage
 * @param  {string}    forgotPasswordSuccessMessage
 * @return {Object}
 */
export const getForgotPasswordFormMarkup = (
  onForgotPasswordSubmit,
  forgotPasswordSubmitButtonText,
  forgotPasswordEmailInputLabel,
  forgotPasswordHeadingText,
  forgotPasswordModalTriggerText,
  forgotPasswordValidation,
  forgotPasswordErrorMessage,
  forgotPasswordSuccessMessage
) => (
  <Modal trigger={<span>{forgotPasswordModalTriggerText}</span>}>
    <Form
      errorMessage={forgotPasswordErrorMessage}
      headingText={forgotPasswordHeadingText}
      onSubmit={onForgotPasswordSubmit}
      submitButtonText={forgotPasswordSubmitButtonText}
      successMessage={forgotPasswordSuccessMessage}
      validation={forgotPasswordValidation}
    >
      <TextInput
        autoComplete="email"
        label={forgotPasswordEmailInputLabel}
        name="email"
      />
    </Form>
  </Modal>
);
