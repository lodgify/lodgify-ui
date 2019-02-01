import React from 'react';

import { Form } from 'collections/Form';
import { Paragraph } from 'typography/Paragraph';

export const getFormMarkup = (isOpen, onSubmit, buttonText, text) =>
  isOpen && (
    <Form onSubmit={onSubmit} submitButtonText={buttonText}>
      <Paragraph>{text}</Paragraph>
    </Form>
  );
