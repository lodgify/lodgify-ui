import React from 'react';
import PropTypes from 'prop-types';
import { Form, Image } from 'semantic-ui-react';

import { TextInput } from 'inputs/TextInput';

/**
 * A captcha input helps to ensure a user is a real human.
 * @return {Object}
 */
export const Component = ({ error, image, isValid, label, name, onChange }) => (
  <Form.Group widths="equal">
    <Form.Field>
      <Image src={image} />
    </Form.Field>
    <Form.Field>
      <TextInput
        error={error}
        isValid={isValid}
        label={label}
        name={name}
        onChange={onChange}
      />
    </Form.Field>
  </Form.Group>
);

Component.displayName = 'CaptchaInput';

Component.defaultProps = {
  error: false,
  isValid: false,
  label: '',
  name: '',
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the captcha input in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** The source url for the image to display. */
  image: PropTypes.string.isRequired,
  /** Is the captcha input in a valid state. */
  isValid: PropTypes.bool,
  /** The visible label for the text input. */
  label: PropTypes.string,
  /** The name for the captcha input. */
  name: PropTypes.string,
  /**
   * A function called when the captcha input value changes
   * @param {String} name
   * @param {String} value
   */
  onChange: PropTypes.func,
};
