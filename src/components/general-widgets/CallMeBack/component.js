import React from 'react';
import PropTypes from 'prop-types';

import { getPrivacyConsentLabel } from 'utils/get-privacy-consent-label';
import {
  ACCEPT_PRIVACY_POLICY,
  CALL_ME_BACK,
  DATE,
  EMAIL,
  NAME,
  NOTES,
  PHONE,
  PROPERTY,
  SEND,
  TIME,
} from 'utils/default-strings';
import { Dropdown } from 'inputs/Dropdown';
import { Form } from 'collections/Form';
import { ICON_NAMES } from 'elements/Icon';
import { InputGroup } from 'collections/InputGroup';
import { PhoneInput } from 'inputs/PhoneInput';
import { SingleDatePicker } from 'inputs/SingleDatePicker';
import { TextArea } from 'inputs/TextArea';
import { TextInput } from 'inputs/TextInput';
import { Checkbox } from 'inputs/Checkbox';

import {
  EMAIL_MAX_CHARACTERS,
  NAME_MAX_CHARACTERS,
  NOTES_MAX_CHARACTERS,
  PHONE_MAX_CHARACTERS,
} from './constants';

/**
 * The standard widget for a user to request a call back.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  dateInputPlaceholder,
  emailInputLabel,
  errorMessage,
  headingText,
  isPrivacyConsentRequired,
  nameInputLabel,
  notesInputLabel,
  onSubmit,
  phoneInputLabel,
  privacyConsentLabelText,
  privacyConsentLabelLinkText,
  privacyConsentLabelLinkUrl,
  propertyInputLabel,
  propertyOptions,
  submitButtonText,
  successMessage,
  timeInputLabel,
  timeOptions,
  validation,
}) => (
  <Form
    autoComplete="off"
    errorMessage={errorMessage}
    headingText={headingText}
    onSubmit={onSubmit}
    submitButtonText={submitButtonText}
    successMessage={successMessage}
    validation={validation}
  >
    <InputGroup>
      <TextInput
        autoComplete="name"
        label={nameInputLabel}
        maxCharacters={NAME_MAX_CHARACTERS}
        name="name"
      />
      <PhoneInput
        autoComplete="tel"
        label={phoneInputLabel}
        maxCharacters={PHONE_MAX_CHARACTERS}
        name="phone"
      />
    </InputGroup>
    <TextInput
      autoComplete="email"
      label={emailInputLabel}
      maxCharacters={EMAIL_MAX_CHARACTERS}
      name="email"
    />
    <InputGroup>
      <SingleDatePicker name="date" placeholderText={dateInputPlaceholder} />
      <Dropdown
        icon={ICON_NAMES.CLOCK}
        label={timeInputLabel}
        name="time"
        options={timeOptions}
      />
    </InputGroup>
    {propertyOptions && (
      <Dropdown
        label={propertyInputLabel}
        name="property"
        options={propertyOptions}
      />
    )}
    <TextArea
      label={notesInputLabel}
      maxCharacters={NOTES_MAX_CHARACTERS}
      name="notes"
    />
    {isPrivacyConsentRequired && (
      <Checkbox
        label={getPrivacyConsentLabel(
          privacyConsentLabelText,
          privacyConsentLabelLinkUrl,
          privacyConsentLabelLinkText
        )}
        name="privacyConsent"
      />
    )}
  </Form>
);

Component.displayName = 'CallMeBack';

Component.defaultProps = {
  dateInputPlaceholder: DATE,
  emailInputLabel: EMAIL,
  errorMessage: '',
  headingText: CALL_ME_BACK,
  isPrivacyConsentRequired: false,
  nameInputLabel: NAME,
  notesInputLabel: NOTES,
  onSubmit: Function.prototype,
  phoneInputLabel: PHONE,
  privacyConsentLabelText: ACCEPT_PRIVACY_POLICY,
  privacyConsentLabelLinkText: undefined,
  privacyConsentLabelLinkUrl: undefined,
  propertyInputLabel: PROPERTY,
  propertyOptions: null,
  submitButtonText: SEND,
  successMessage: '',
  timeInputLabel: TIME,
  validation: {},
};

Component.propTypes = {
  /** The placeholder for the date input. */
  dateInputPlaceholder: PropTypes.string,
  /** The label for the email input. */
  emailInputLabel: PropTypes.string,
  /** The message to display when the form has an error. */
  errorMessage: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** Displays a privacy consent checkbox in the form. */
  isPrivacyConsentRequired: PropTypes.bool,
  /** The label for the name input. */
  nameInputLabel: PropTypes.string,
  /** The label for the notes input. */
  notesInputLabel: PropTypes.string,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
  /** The label for the phone input */
  phoneInputLabel: PropTypes.string,
  /** The text to display as the privacy policy link next to the privacy consent checkbox. */
  privacyConsentLabelLinkText: PropTypes.string,
  /** The location the privacy policy link next to the privacy consent checkbox. */
  privacyConsentLabelLinkUrl: PropTypes.string,
  /** The text to display next to the privacy consent checkbox. */
  privacyConsentLabelText: PropTypes.node,
  /** The label for the property input. */
  propertyInputLabel: PropTypes.string,
  /** The options which the user can select for the property field. */
  propertyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The indent level of a property option. One of: 0, 1, 2, 3, 4, 5 */
      indent: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
  /** The form submit button text */
  submitButtonText: PropTypes.string,
  /** The message to display when the form is successful. */
  successMessage: PropTypes.string,
  /** The label for the time input. */
  timeInputLabel: PropTypes.string,
  /** The options which the user can select for the time field. */
  timeOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  /** Settings for validating inputs. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  validation: PropTypes.shape({
    date: PropTypes.object,
    email: PropTypes.object,
    name: PropTypes.object,
    notes: PropTypes.object,
    phone: PropTypes.object,
    privacyConsent: PropTypes.object,
    property: PropTypes.object,
    time: PropTypes.object,
  }),
};
