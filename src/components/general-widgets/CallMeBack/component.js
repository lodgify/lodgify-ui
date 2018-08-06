import React from 'react';
import PropTypes from 'prop-types';

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
  onSubmit,
  propertyOptions,
  timeOptions,
  timeZoneOptions,
}) => (
  <Form headingText="Call me back" onSubmit={onSubmit} submitButtonText="Send">
    <InputGroup>
      <TextInput label="Name" name="name" />
      <PhoneInput label="Phone" name="phone" />
    </InputGroup>
    <TextInput label="Email" name="email" />
    <InputGroup>
      <SingleDatePicker name="date" placeholderText="Date" />
      <Dropdown
        icon={ICON_NAMES.CLOCK}
        label="Time"
        name="time"
        options={timeOptions}
      />
    </InputGroup>
    <InputGroup>
      <Dropdown label="Time Zone" name="timeZone" options={timeZoneOptions} />
      <Dropdown label="Property" name="property" options={propertyOptions} />
    </InputGroup>
    <TextArea label="Notes" name="notes" />
  </Form>
);

Component.displayName = 'CallMeBack';

Component.defaultProps = {
  onSubmit: Function.prototype,
};

Component.propTypes = {
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
};
