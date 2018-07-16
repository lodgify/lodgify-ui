import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Form } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { Button } from 'elements/Button';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';

import { getBarSizing } from './utils/getBarSizing';

/**
 * The standard widget for property search.
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
    const {
      getIsDayBlocked,
      guestsOptions,
      locationOptions,
      isShowingLocationDropdown,
      isShowingSummary,
      searchButton,
      isSticky,
    } = this.props;

    const { rangePickerWidth, computer } = getBarSizing(
      isShowingSummary,
      isShowingLocationDropdown
    );

    const defaultGridProps = {
      computer,
    };

    return (
      <div className={cx({ 'is-sticky': isSticky })}>
        <Form onSubmit={this.handleSubmit}>
          <Grid columns="equal" verticalAlign="middle">
            {!!isShowingSummary && (
              <GridColumn tablet="6" {...defaultGridProps}>
                <Icon isDisabled labelText="Property Summary" name="home" />
              </GridColumn>
            )}
            {!!isShowingLocationDropdown && (
              <GridColumn computer="2" tablet="6">
                <Dropdown
                  icon="map pin"
                  label="Location"
                  name="location"
                  onChange={this.persistInputChange}
                  options={locationOptions}
                />
              </GridColumn>
            )}
            <GridColumn computer={rangePickerWidth} tablet="12">
              <DateRangePicker
                endDatePlaceholderText="Check-out"
                getIsDayBlocked={getIsDayBlocked}
                name="dates"
                onChange={this.persistInputChange}
                startDatePlaceholderText="Check-in"
              />
            </GridColumn>
            <GridColumn tablet="6" {...defaultGridProps}>
              <Dropdown
                icon="users"
                label="Guests"
                name="guests"
                onChange={this.persistInputChange}
                options={guestsOptions}
              />
            </GridColumn>
            <GridColumn computer="3" tablet="6">
              {searchButton}
            </GridColumn>
          </Grid>
        </Form>
      </div>
    );
  };
}

Component.displayName = 'SearchBar';

Component.defaultProps = {
  getIsDayBlocked: Function.prototype,
  onSubmit: Function.prototype,
  isShowingSummary: false,
  isShowingLocationDropdown: true,
  isSticky: false,
  searchButton: (
    <Button icon="search" isRounded>
      Search
    </Button>
  ),
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
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  /** Is Search Bar showing the Location Dropdown. */
  isShowingLocationDropdown: PropTypes.bool,
  /** Is Search Bar showing the Property Summary info. */
  isShowingSummary: PropTypes.bool,
  /** Is Search Bar going to render in sticky mode. */
  isSticky: PropTypes.bool,
  /** The options which the user can select in the location field. */
  locationOptions: PropTypes.arrayOf(
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
  /** The function to call when the search bar is submitted.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  onSubmit: PropTypes.func,
  /** The Search Button the Search Bar displays. */
  searchButton: PropTypes.node,
};
