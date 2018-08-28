import React from 'react';

import { Form } from 'collections/Form';
import { Modal } from 'elements/Modal';
import { TextInput } from 'inputs/TextInput';

/**
 * @param {Function}  onForgotPasswordSubmit
 * @param {String}    forgotPasswordSubmitButtonText
 * @param {String}    forgotPasswordEmailInputLabel
 * @param {String}    forgotPasswordHeadingText
 * @param {String}    forgotPasswordModalTriggerText
 * @return {Object}
 */
export const getForgotPasswordFormMarkup = (
  onForgotPasswordSubmit,
  forgotPasswordSubmitButtonText,
  forgotPasswordEmailInputLabel,
  forgotPasswordHeadingText,
  forgotPasswordModalTriggerText,
  forgotPasswordValidation
) => (
  <Modal trigger={<span>{forgotPasswordModalTriggerText}</span>}>
    <Form
      headingText={forgotPasswordHeadingText}
      onSubmit={onForgotPasswordSubmit}
      submitButtonText={forgotPasswordSubmitButtonText}
      validation={forgotPasswordValidation}
    >
      <TextInput label={forgotPasswordEmailInputLabel} name="email" />
    </Form>
  </Modal>
);
