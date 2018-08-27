import React from 'react';

import { Form } from 'collections/Form';
import { Modal } from 'elements/Modal';
import { TextInput } from 'inputs/TextInput';

/**
 * @param {Function}  onForgotPasswordSubmit
 * @param {String}    forgotPasswordButtonText
 * @param {String}    forgotPasswordEmailLabel
 * @param {String}    forgotPasswordHeadingText
 * @param {String}    forgotPasswordModelTriggerText
 * @return {Object}
 */
export const getForgotPasswordFormMarkup = (
  onForgotPasswordSubmit,
  forgotPasswordButtonText,
  forgotPasswordEmailLabel,
  forgotPasswordHeadingText,
  forgotPasswordModelTriggerText
) => (
  <Modal trigger={<span>{forgotPasswordModelTriggerText}</span>}>
    <Form
      headingText={forgotPasswordHeadingText}
      onSubmit={onForgotPasswordSubmit}
      submitButtonText={forgotPasswordButtonText}
    >
      <TextInput label={forgotPasswordEmailLabel} name="email" />
    </Form>
  </Modal>
);
