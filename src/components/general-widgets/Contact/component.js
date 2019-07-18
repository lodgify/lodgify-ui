import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { TextInput } from 'inputs/TextInput';
import { PhoneInput } from 'inputs/PhoneInput';
import { NumberInput } from 'inputs/NumberInput';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { TextArea } from 'inputs/TextArea';
import { Dropdown } from 'inputs/Dropdown';
import { Checkbox } from 'inputs/Checkbox';
import {
  ACCEPT_PRIVACY_POLICY,
  ARRIVAL,
  COMMENTS,
  CONTACT,
  DEPARTURE,
  EMAIL,
  FORM_PROTECTION,
  GUESTS,
  NAME,
  PHONE,
  PROPERTY,
  SEND,
} from 'utils/default-strings';
import { getPrivacyConsentLabel } from 'utils/get-privacy-consent-label';

import {
  COMMENT_MAX_CHARACTERS,
  EMAIL_MAX_CHARACTERS,
  NAME_MAX_CHARACTERS,
  PHONE_MAX_CHARACTERS,
} from './constants';

/**
 * The standard widget for a user contact an owner.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  arrivalDateInputLabel,
  botProtectionMessage,
  commentsInputLabel,
  dateRangePickerLocaleCode,
  departureDateInputLabel,
  emailInputLabel,
  errorMessage,
  guestsInputLabel,
  headingText,
  isBotProtected,
  isPrivacyConsentRequired,
  nameInputLabel,
  onChangeProperty,
  onSubmit,
  phoneInputLabel,
  privacyConsentLabelLinkText,
  privacyConsentLabelLinkUrl,
  privacyConsentLabelText,
  propertyInputLabel,
  propertyOptions,
  submitButtonText,
  successMessage,
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
    <InputGroup>
      <TextInput
        autoComplete="email"
        label={emailInputLabel}
        maxCharacters={EMAIL_MAX_CHARACTERS}
        name="email"
        width="eight"
      />
      <NumberInput
        label={guestsInputLabel}
        min={1}
        name="guests"
        width="four"
      />
    </InputGroup>
    <DateRangePicker
      endDatePlaceholderText={departureDateInputLabel}
      localeCode={dateRangePickerLocaleCode}
      name="dates"
      startDatePlaceholderText={arrivalDateInputLabel}
    />
    <TextArea
      label={commentsInputLabel}
      maxCharacters={COMMENT_MAX_CHARACTERS}
      name="comments"
    />
    {propertyOptions && (
      <Dropdown
        label={propertyInputLabel}
        name="property"
        onChange={onChangeProperty}
        options={propertyOptions}
      />
    )}
    {isBotProtected && botProtectionMessage}
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

Component.displayName = 'Contact';

Component.defaultProps = {
  arrivalDateInputLabel: ARRIVAL,
  botProtectionMessage: FORM_PROTECTION,
  commentsInputLabel: COMMENTS,
  dateRangePickerLocaleCode: undefined,
  departureDateInputLabel: DEPARTURE,
  emailInputLabel: EMAIL,
  errorMessage: '',
  guestsInputLabel: GUESTS,
  headingText: CONTACT,
  isBotProtected: false,
  isPrivacyConsentRequired: false,
  nameInputLabel: NAME,
  onChangeProperty: Function.prototype,
  onSubmit: Function.prototype,
  phoneInputLabel: PHONE,
  privacyConsentLabelLinkText: undefined,
  privacyConsentLabelLinkUrl: undefined,
  privacyConsentLabelText: ACCEPT_PRIVACY_POLICY,
  propertyInputLabel: PROPERTY,
  propertyOptions: null,
  submitButtonText: SEND,
  successMessage: '',
  validation: {},
};

Component.propTypes = {
  /** The label for the arrival date input.*/
  arrivalDateInputLabel: PropTypes.string,
  /** The bot protection message that displays in the form. */
  botProtectionMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The label for the comments input.*/
  commentsInputLabel: PropTypes.string,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the date range picker. */
  dateRangePickerLocaleCode: PropTypes.string,
  /** The label for the departure date input.*/
  departureDateInputLabel: PropTypes.string,
  /** The label for the email input.*/
  emailInputLabel: PropTypes.string,
  /** The message to display when the form has an error. */
  errorMessage: PropTypes.string,
  /** The label for the guests input.*/
  guestsInputLabel: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** Displays a bot protection message in the form. */
  isBotProtected: PropTypes.bool,
  /** Displays a privacy consent checkbox in the form. */
  isPrivacyConsentRequired: PropTypes.bool,
  /** The label for the name input.*/
  nameInputLabel: PropTypes.string,
  /** The function called when the property dropdown is changed.
   *  @param {String}        name - The name of the property dropdown field.
   *  @param {String|Number} value - The value of the property dropdown after the change
   */
  onChangeProperty: PropTypes.func,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
  /** The label for the phone input.*/
  phoneInputLabel: PropTypes.string,
  /** The text to display as the privacy policy link next to the privacy consent checkbox. */
  privacyConsentLabelLinkText: PropTypes.string,
  /** The location the privacy policy link next to the privacy consent checkbox. */
  privacyConsentLabelLinkUrl: PropTypes.string,
  /** The text to display next to the privacy consent checkbox. */
  privacyConsentLabelText: PropTypes.node,
  /** The label for the property input.*/
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
  /** The text to display on the submit button. */
  submitButtonText: PropTypes.string,
  /** The message to display when the form is successful. */
  successMessage: PropTypes.string,
  /** Settings for validating inputs. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  validation: PropTypes.shape({
    comments: PropTypes.object,
    dates: PropTypes.object,
    email: PropTypes.object,
    guests: PropTypes.object,
    name: PropTypes.object,
    phone: PropTypes.object,
    privacyConsent: PropTypes.object,
    property: PropTypes.object,
    room: PropTypes.object,
  }),
};
