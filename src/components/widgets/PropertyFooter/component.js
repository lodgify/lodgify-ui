import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import { GridColumn } from 'layout/GridColumn';
import { Dropdown } from 'elements/Dropdown';
import { DateRangePicker } from 'elements/DateRangePicker';
import { Button } from 'elements/Button';
import { Icon } from 'elements/Icon';

/**
 * The standard widget for displaying the Check Availability Search Bar of a property.
 * @extends {React.PureComponent}
 */
export class Component extends PureComponent {
  state = {};

  persistInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render = () => {
    const { getIsDayBlocked, guestsOptions } = this.props;
    return (
      <GridColumn width={12}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field width="four">
              <Icon label="Property Summary" name="home" />
            </Form.Field>
            <Form.Field width="four">
              <DateRangePicker
                endDatePlaceholderText="Check-out"
                getIsDayBlocked={getIsDayBlocked}
                name="dates"
                onChange={this.persistInputChange}
                startDatePlaceholderText="Check-in"
              />
            </Form.Field>
            <Form.Field width="two">
              <Dropdown
                icon="users"
                label="Guests"
                name="guests"
                onChange={this.persistInputChange}
                options={guestsOptions}
              />
            </Form.Field>
            <Form.Field width="two">
              <Button isRounded>Check Availability</Button>
            </Form.Field>
          </Form.Group>
        </Form>
      </GridColumn>
    );
  };
}

Component.displayName = 'PropertyFooter';

Component.defaultProps = {
  getIsDayBlocked: Function.prototype,
  onSubmit: Function.prototype,
};

Component.propTypes = {
  /**
   * A function called for each day to be displayed in the DateRangePicker. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {Boolean}     - Is the day blocked.
   */
  getIsDayBlocked: PropTypes.func,
  /** The options which the user can select in the guests field. */
  guestsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ).isRequired,
  /** The function to call when the availability check is submitted.
   *  @param {Object} values - The values of the inputs in check availability bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  onSubmit: PropTypes.func,
};
