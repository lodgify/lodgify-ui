import React from 'react';

import { Form } from 'collections/Form';
import { Modal } from 'elements/Modal';
import { TextInput } from 'inputs/TextInput';

import { getForgotPasswordFormMarkup } from './getForgotPasswordFormMarkup';

describe('getForgotPasswordFormMarkup', () => {
  it('should return the right markup ', () => {
    const someFunction = () => {};
    const actual = getForgotPasswordFormMarkup(someFunction);

    expect(actual).toEqual(
      <Modal trigger={<span>Forgot password</span>}>
        <Form
          headingText="Forgot Password"
          onSubmit={someFunction}
          submitButtonText="Send reset"
        >
          <TextInput label="Email" name="email" />
        </Form>
      </Modal>
    );
  });
});
