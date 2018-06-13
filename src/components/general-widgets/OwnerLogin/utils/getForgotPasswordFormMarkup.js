import React from 'react';

import { Form } from 'collections/Form';
import { Modal } from 'elements/Modal';
import { TextInput } from 'inputs/TextInput';

/**
 * @param  {Function} onForgotPasswordSubmit
 * @return {Object}
 */
export const getForgotPasswordFormMarkup = onForgotPasswordSubmit => (
  <Modal trigger={<span>Forgot password</span>}>
    <Form
      headingText="Forgot Password"
      onSubmit={onForgotPasswordSubmit}
      submitButtonText="Send reset"
    >
      <TextInput label="Email" name="email" />
    </Form>
  </Modal>
);
