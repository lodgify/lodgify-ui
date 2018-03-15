import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon } from 'semantic-ui-react';

import { Dropdown } from 'elements/Dropdown';
import { DateRangePicker } from 'elements/DateRangePicker';
import { Button } from 'elements/Button';

/**
 * The standard widget for owner sign up.
 * @returns {Object}
 */
export const Component = ({ guestOptions, locationOptions, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Form.Group>
      <Form.Field width="three">
        <Dropdown
          icon="map pin"
          label="Location"
          name="location"
          options={locationOptions}
        />
      </Form.Field>
      <Form.Field width="seven">
        <DateRangePicker
          endDatePlaceholderText="Check-out"
          name="dates"
          startDatePlaceholderText="Check-in"
        />
      </Form.Field>
      <Form.Field width="three">
        <Dropdown
          icon="users"
          label="Guests"
          name="guests"
          options={guestOptions}
        />
      </Form.Field>
      <Form.Field width="three">
        <Button>
          <Icon name="search" />
          Search
        </Button>
      </Form.Field>
    </Form.Group>
  </Form>
);

Component.displayName = 'SearchBar';

Component.defaultProps = {
  onSubmit: Function.prototype,
};

Component.propTypes = {
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func,
};
