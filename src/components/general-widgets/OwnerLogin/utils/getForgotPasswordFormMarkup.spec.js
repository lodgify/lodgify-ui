import React from 'react';

import { Form } from 'collections/Form';
import { Modal } from 'elements/Modal';
import { TextInput } from 'inputs/TextInput';

import { getForgotPasswordFormMarkup } from './getForgotPasswordFormMarkup';

describe('getForgotPasswordFormMarkup', () => {
  it('should return the right markup ', () => {
    const someFunction = () => {};
    const forgotPasswordSubmitButtonText = 'A';
    const forgotPasswordEmailInputLabel = 'B';
    const forgotPasswordHeadingText = 'C';
    const forgotPasswordModalTriggerText = 'D';
    const actual = getForgotPasswordFormMarkup(
      someFunction,
      forgotPasswordSubmitButtonText,
      forgotPasswordEmailInputLabel,
      forgotPasswordHeadingText,
      forgotPasswordModalTriggerText
    );

    expect(actual).toEqual(
      <Modal trigger={<span>{forgotPasswordModalTriggerText}</span>}>
        <Form
          headingText={forgotPasswordHeadingText}
          onSubmit={someFunction}
          submitButtonText={forgotPasswordSubmitButtonText}
        >
          <TextInput label={forgotPasswordEmailInputLabel} name="email" />
        </Form>
      </Modal>
    );
  });
});
