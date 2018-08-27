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
      <Modal trigger={<span />}>
        <Form
          headingText={null}
          onSubmit={someFunction}
          submitButtonText={null}
        >
          <TextInput label="" name="email" />
        </Form>
      </Modal>
    );
  });
});
