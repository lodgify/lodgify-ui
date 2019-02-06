import React from 'react';

import { Form } from 'collections/Form';
import { Paragraph } from 'typography/Paragraph';
import { Link } from 'elements/Link';

/**
 * @param {string} buttonText
 * @param {string} linkText
 * @param {string} linkUrl
 * @param {Function} onAccept
 * @param {string} text
 * @return {Object}
 */
export const getFormMarkup = (
  buttonText,
  linkText,
  linkUrl,
  onAccept,
  text
) => (
  <Form onSubmit={onAccept} submitButtonText={buttonText}>
    <Paragraph>{text}</Paragraph>
    <Link href={linkUrl}>{linkText}</Link>
  </Form>
);
