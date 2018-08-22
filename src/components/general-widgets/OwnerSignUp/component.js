import React from 'react';
import PropTypes from 'prop-types';

import {
  EMAIL,
  FIRST_NAME,
  LAST_NAME,
  OWNER_SIGNUP,
  SIGN_UP,
} from 'utils/default-strings';
import { Form } from 'collections/Form';
import { TextInput } from 'inputs/TextInput';

/**
 * The standard widget for owner sign up.
 * @returns {Object}
 */
export const Component = ({
  emailLabel,
  firstNameLabel,
  formButtonText,
  formHeadingText,
  lastNameLabel,
  onSubmit,
}) => (
  <Form
    headingText={formHeadingText}
    onSubmit={onSubmit}
    submitButtonText={formButtonText}
  >
    <TextInput label={firstNameLabel} name="firstName" />
    <TextInput label={lastNameLabel} name="lastName" />
    <TextInput label={emailLabel} name="email" />
  </Form>
);

Component.displayName = 'OwnerSignUp';

Component.defaultProps = {
  emailLabel: EMAIL,
  firstNameLabel: FIRST_NAME,
  formButtonText: SIGN_UP,
  formHeadingText: OWNER_SIGNUP,
  lastNameLabel: LAST_NAME,
  onSubmit: Function.prototype,
};

Component.propTypes = {
  /** The email label */
  emailLabel: PropTypes.string,
  /** The first name label */
  firstNameLabel: PropTypes.string,
  /** The form submit button text */
  formButtonText: PropTypes.string,
  /** The form heading text */
  formHeadingText: PropTypes.string,
  /** The last name label */
  lastNameLabel: PropTypes.string,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
};
