import React from 'react';
import PropTypes from 'prop-types';
import { Form, Image } from 'semantic-ui-react';

import { TextInput } from 'elements/TextInput';

/**
 * A captcha input helps to ensure a user is a real human.
 * @return {Object}
 */
export const Component = ({ image, label, name, onChange }) => (
  <Form.Group widths="equal">
    <Form.Field>
      <Image src={image} />
    </Form.Field>
    <TextInput label={label} name={name} onChange={onChange} />
  </Form.Group>
);

Component.displayName = 'CaptchaInput';

Component.defaultProps = {
  label: '',
  name: '',
  onChange: Function.prototype,
};

Component.propTypes = {
  /** The source url for the image to display. */
  image: PropTypes.string.isRequired,
  /** The visible label for the text input. */
  label: PropTypes.string,
  /** The name for the text input. */
  name: PropTypes.string,
  /**
   * A function called when the text input value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
};
