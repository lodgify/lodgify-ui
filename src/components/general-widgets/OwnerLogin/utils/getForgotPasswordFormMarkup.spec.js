import React from 'react';

import { FORGOT_PASSWORD, SEND_RESET, EMAIL } from 'utils/default-strings';
import { Form } from 'collections/Form';
import { Modal } from 'elements/Modal';
import { TextInput } from 'inputs/TextInput';

import { getForgotPasswordFormMarkup } from './getForgotPasswordFormMarkup';

describe('getForgotPasswordFormMarkup', () => {
  it('should return the right markup ', () => {
    const someFunction = () => {};
    const actual = getForgotPasswordFormMarkup(someFunction);

    expect(actual).toEqual(
      <Modal trigger={<span>{FORGOT_PASSWORD}</span>}>
        <Form
          headingText={FORGOT_PASSWORD}
          onSubmit={someFunction}
          submitButtonText={SEND_RESET}
        >
          <TextInput label={EMAIL} name="email" />
        </Form>
      </Modal>
    );
  });
});
