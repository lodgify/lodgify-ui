import React from 'react';
import PropTypes from 'prop-types';

import {
  CALL_ME_BACK,
  DATE,
  EMAIL,
  NAME,
  NOTES,
  PHONE,
  PROPERTY,
  SEND,
  TIME_ZONE,
  TIME,
} from 'utils/default-strings';
import { Dropdown } from 'inputs/Dropdown';
import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { PhoneInput } from 'inputs/PhoneInput';
import { SingleDatePicker } from 'inputs/SingleDatePicker';
import { TextArea } from 'inputs/TextArea';
import { TextInput } from 'inputs/TextInput';
import { ICON_NAMES } from 'elements/Icon';

/**
 * The standard widget for a user to request a call back.
 * @returns {Object}
 */
export const Component = ({
  datePlaceholderLabel,
  emailFieldLabel,
  headingText,
  nameFieldLabel,
  noteTextareaLabel,
  onSubmit,
  phoneFieldLabel,
  propertyDropdownLabel,
  propertyOptions,
  submitButtonText,
  timeDropdownLabel,
  timeOptions,
  timezoneDropdownLabel,
  timeZoneOptions,
}) => (
  <Form
    headingText={headingText}
    onSubmit={onSubmit}
    submitButtonText={submitButtonText}
  >
    <InputGroup>
      <TextInput label={nameFieldLabel} name="name" />
      <PhoneInput label={phoneFieldLabel} name="phone" />
    </InputGroup>
    <TextInput label={emailFieldLabel} name="email" />
    <InputGroup>
      <SingleDatePicker name="date" placeholderText={datePlaceholderLabel} />
      <Dropdown
        icon={ICON_NAMES.CLOCK}
        label={timeDropdownLabel}
        name="time"
        options={timeOptions}
      />
    </InputGroup>
    <InputGroup>
      <Dropdown
        label={timezoneDropdownLabel}
        name="timeZone"
        options={timeZoneOptions}
      />
      <Dropdown
        label={propertyDropdownLabel}
        name="property"
        options={propertyOptions}
      />
    </InputGroup>
    <TextArea label={noteTextareaLabel} name="notes" />
  </Form>
);

Component.displayName = 'CallMeBack';

Component.defaultProps = {
  datePlaceholderLabel: DATE,
  emailFieldLabel: EMAIL,
  headingText: CALL_ME_BACK,
  nameFieldLabel: NAME,
  noteTextareaLabel: NOTES,
  onSubmit: Function.prototype,
  phoneFieldLabel: PHONE,
  propertyDropdownLabel: PROPERTY,
  submitButtonText: SEND,
  timeDropdownLabel: TIME,
  timezoneDropdownLabel: TIME_ZONE,
};

Component.propTypes = {
  /** The date placeholder label */
  datePlaceholderLabel: PropTypes.string,
  /** The email field label */
  emailFieldLabel: PropTypes.string,
  /** The heading text */
  headingText: PropTypes.string,
  /** The name field label */
  nameFieldLabel: PropTypes.string,
  /** The note text area label */
  noteTextareaLabel: PropTypes.string,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
  /** The phone field label */
  phoneFieldLabel: PropTypes.string,
  /** The property dropdown label */
  propertyDropdownLabel: PropTypes.string,
  /** The options which the user can select for the property field. */
  propertyOptions: PropTypes.arrayOf(
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
  /** The form submit button text */
  submitButtonText: PropTypes.string,
  /** The time dropdown label */
  timeDropdownLabel: PropTypes.string,
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
  /** The options which the user can select for the time zone field. */
  timeZoneOptions: PropTypes.arrayOf(
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
  /** The time zone dropdown label */
  timezoneDropdownLabel: PropTypes.string,
};
