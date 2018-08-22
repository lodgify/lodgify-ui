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
  /** The label for the email input */
  emailLabel: PropTypes.string,
  /** The label for the first name input */
  firstNameLabel: PropTypes.string,
  /** The text displayed inside the form submit button */
  formButtonText: PropTypes.string,
  /** The text displayed at the top of the form */
  formHeadingText: PropTypes.string,
  /** The label for the last name input */
  lastNameLabel: PropTypes.string,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
};
