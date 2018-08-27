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
  dateInputPlaceholder,
  emailInputLabel,
  headingText,
  nameInputLabel,
  notesInputLabel,
  onSubmit,
  phoneInputLabel,
  propertyInputLabel,
  propertyOptions,
  submitButtonText,
  timeInputLabel,
  timeOptions,
  timeZoneInputLabel,
  timeZoneOptions,
}) => (
  <Form
    headingText={headingText}
    onSubmit={onSubmit}
    submitButtonText={submitButtonText}
  >
    <InputGroup>
      <TextInput label={nameInputLabel} name="name" />
      <PhoneInput label={phoneInputLabel} name="phone" />
    </InputGroup>
    <TextInput label={emailInputLabel} name="email" />
    <InputGroup>
      <SingleDatePicker name="date" placeholderText={dateInputPlaceholder} />
      <Dropdown
        icon={ICON_NAMES.CLOCK}
        label={timeInputLabel}
        name="time"
        options={timeOptions}
      />
    </InputGroup>
    <InputGroup>
      <Dropdown
        label={timeZoneInputLabel}
        name="timeZone"
        options={timeZoneOptions}
      />
      <Dropdown
        label={propertyInputLabel}
        name="property"
        options={propertyOptions}
      />
    </InputGroup>
    <TextArea label={notesInputLabel} name="notes" />
  </Form>
);

Component.displayName = 'CallMeBack';

Component.defaultProps = {
  dateInputPlaceholder: DATE,
  emailInputLabel: EMAIL,
  headingText: CALL_ME_BACK,
  nameInputLabel: NAME,
  notesInputLabel: NOTES,
  onSubmit: Function.prototype,
  phoneInputLabel: PHONE,
  propertyInputLabel: PROPERTY,
  submitButtonText: SEND,
  timeInputLabel: TIME,
  timeZoneInputLabel: TIME_ZONE,
};

Component.propTypes = {
  /** The placeholder for the date input. */
  dateInputPlaceholder: PropTypes.string,
  /** The label for the email input. */
  emailInputLabel: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
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
  /** The label for the property input. */
  propertyInputLabel: PropTypes.string,
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
  /** The label for the time zone input. */
  timeZoneInputLabel: PropTypes.string,
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
};
