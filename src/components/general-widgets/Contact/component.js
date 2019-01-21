import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { TextInput } from 'inputs/TextInput';
import { PhoneInput } from 'inputs/PhoneInput';
import { NumberInput } from 'inputs/NumberInput';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { TextArea } from 'inputs/TextArea';
import { CaptchaInput } from 'inputs/CaptchaInput';
import { Dropdown } from 'inputs/Dropdown';
import {
  ARRIVAL,
  CONTACT,
  COMMENTS,
  DEPARTURE,
  EMAIL,
  GUESTS,
  NAME,
  PHONE,
  PROPERTY,
  ROOM,
  SECURITY_CODE,
  SEND,
} from 'utils/default-strings';

/**
 * The standard widget for a user contact an owner.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  arrivalDateInputLabel,
  captchaInputImage,
  captchaInputLabel,
  commentsInputLabel,
  dateRangePickerLocaleCode,
  departureDateInputLabel,
  emailInputLabel,
  errorMessage,
  guestsInputLabel,
  headingText,
  nameInputLabel,
  onChangeProperty,
  onSubmit,
  phoneInputLabel,
  propertyInputLabel,
  propertyOptions,
  roomInputLabel,
  roomOptions,
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
      <TextInput autoComplete="name" label={nameInputLabel} name="name" />
      <PhoneInput autoComplete="tel" label={phoneInputLabel} name="phone" />
    </InputGroup>
    <TextInput autoComplete="email" label={emailInputLabel} name="email" />
    <InputGroup>
      <DateRangePicker
        endDatePlaceholderText={departureDateInputLabel}
        localeCode={dateRangePickerLocaleCode}
        name="dates"
        startDatePlaceholderText={arrivalDateInputLabel}
        width="eight"
      />
      <NumberInput
        label={guestsInputLabel}
        min={1}
        name="guests"
        width="four"
      />
    </InputGroup>
    <TextArea label={commentsInputLabel} name="comments" />
    {(roomOptions || propertyOptions) && (
      <InputGroup>
        {propertyOptions && (
          <Dropdown
            label={propertyInputLabel}
            name="property"
            onChange={onChangeProperty}
            options={propertyOptions}
          />
        )}
        {roomOptions && (
          <Dropdown label={roomInputLabel} name="room" options={roomOptions} />
        )}
      </InputGroup>
    )}
    <CaptchaInput
      image={captchaInputImage}
      label={captchaInputLabel}
      name="captcha"
    />
  </Form>
);

Component.displayName = 'Contact';

Component.defaultProps = {
  arrivalDateInputLabel: ARRIVAL,
  captchaInputLabel: SECURITY_CODE,
  commentsInputLabel: COMMENTS,
  dateRangePickerLocaleCode: undefined,
  departureDateInputLabel: DEPARTURE,
  emailInputLabel: EMAIL,
  errorMessage: '',
  guestsInputLabel: GUESTS,
  headingText: CONTACT,
  nameInputLabel: NAME,
  onChangeProperty: Function.prototype,
  onSubmit: Function.prototype,
  phoneInputLabel: PHONE,
  propertyInputLabel: PROPERTY,
  propertyOptions: null,
  roomInputLabel: ROOM,
  roomOptions: null,
  submitButtonText: SEND,
  successMessage: '',
  validation: {},
};

Component.propTypes = {
  /** The label for the arrival date input.*/
  arrivalDateInputLabel: PropTypes.string,
  /** The source url for the image to display. */
  captchaInputImage: PropTypes.string.isRequired,
  /** The label for the captcha input.*/
  captchaInputLabel: PropTypes.string,
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
  /** The label for the room input.*/
  roomInputLabel: PropTypes.string,
  /** The options which the user can select for the room field. */
  roomOptions: PropTypes.arrayOf(
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
  ),
  /** The text to display on the submit button. */
  submitButtonText: PropTypes.string,
  /** The message to display when the form is successful. */
  successMessage: PropTypes.string,
  /** Settings for validating inputs. Each value should match [the shape documented in `Form`](https://lodgify.github.io/lodgify-ui/#/Collections/Form) */
  validation: PropTypes.shape({
    captcha: PropTypes.object,
    comments: PropTypes.object,
    dates: PropTypes.object,
    email: PropTypes.object,
    guests: PropTypes.object,
    name: PropTypes.object,
    phone: PropTypes.object,
    property: PropTypes.object,
    room: PropTypes.object,
  }),
};
