import React from 'react';
import PropTypes from 'prop-types';

import { Form } from 'collections/Form';
import { InputGroup } from 'collections/InputGroup';
import { TextInput } from 'elements/TextInput';
import { PhoneInput } from 'elements/PhoneInput';
import { Dropdown } from 'elements/Dropdown';
import { DateRangePicker } from 'elements/DateRangePicker';
import { TextArea } from 'elements/TextArea';
import { CaptchaInput } from 'elements/CaptchaInput';

/**
 * The standard widget for a user contact an owner.
 * @returns {Object}
 */
export const Component = ({
  captchaInputImage,
  guestsOptions,
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
      <Dropdown
        icon="users"
        label="Guests"
        name="guests"
        options={guestsOptions}
        width="four"
      />
    </InputGroup>
    <TextArea label="Comments" name="comments" />
    <InputGroup>
      <Dropdown label="Property" name="property" options={propertyOptions} />
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
  onSubmit: Function.prototype,
};

Component.propTypes = {
  /** The source url for the image to display. */
  captchaInputImage: PropTypes.string.isRequired,
  /** The options which the user can select for the guests field. */
  guestsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ).isRequired,
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
      value: PropTypes.any,
    })
  ).isRequired,
  /** The options which the user can select for the room field. */
  roomOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ).isRequired,
};
