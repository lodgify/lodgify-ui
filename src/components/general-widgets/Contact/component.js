import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { TextInput } from 'inputs/TextInput';
import { PhoneInput } from 'inputs/PhoneInput';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { TextArea } from 'inputs/TextArea';
import { CaptchaInput } from 'inputs/CaptchaInput';

/**
 * The standard widget for a user contact an owner.
 * @returns {Object}
 */
export const Component = ({
  captchaInputImage,
  onChangeProperty,
  onSubmit,
  propertyOptions,
  roomOptions,
}) => (
  <Form headingText="Contact" onSubmit={onSubmit} submitButtonText="Send">
    <InputGroup>
      <TextInput label="Name" name="name" />
      <PhoneInput label="Phone" name="phone" />
    </InputGroup>
    <TextInput label="Email" name="email" />
    <InputGroup>
      <DateRangePicker
        endDatePlaceholderText="Departure"
        name="dates"
        startDatePlaceholderText="Arrival"
        width="eight"
      />
      <TextInput label="Guests" name="guests" type="number" width="four" />
    </InputGroup>
    <TextArea label="Comments" name="comments" />
    <InputGroup>
      <Dropdown
        label="Property"
        name="property"
        onChange={onChangeProperty}
        options={propertyOptions}
      />
      <Dropdown label="Room" name="room" options={roomOptions} />
    </InputGroup>
    <CaptchaInput
      image={captchaInputImage}
      label="Security Code"
      name="captcha"
    />
  </Form>
);

Component.displayName = 'Contact';

Component.defaultProps = {
  onChangeProperty: Function.prototype,
  onSubmit: Function.prototype,
  roomOptions: undefined,
};

Component.propTypes = {
  /** The source url for the image to display. */
  captchaInputImage: PropTypes.string.isRequired,
  /** The function called when the property dropdown is changed.
   *  @param {String}        name - The name of the property dropdown field.
   *  @param {String|Number} value - The value of the property dropdown after the change
   */
  onChangeProperty: PropTypes.func,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
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
};
