import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'elements/Button';
import { SearchBar } from 'general-widgets/SearchBar';

/**
 * The standard widget displaying the summary and search bar as the footer of a property page.
 * @returns {Object}
 */
export const Component = ({
  guestsOptions,
  searchButton,
  locationOptions,
  onSubmit,
}) => (
  <SearchBar
    guestsOptions={guestsOptions}
    locationOptions={locationOptions}
    onSubmit={onSubmit}
    searchButton={searchButton}
    isShowingLocationDropdown={false}
    isShowingSummary
    isSticky
  />
);

Component.displayName = 'Footer';

Component.defaultProps = {
  onSubmit: Function.prototype,
  searchButton: <Button isRounded>Check Availability</Button>,
};

Component.propTypes = {
  /** The options which the user can select in the guests field. */
  guestsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ).isRequired,
  /** The options which the user can select in the location field. */
  locationOptions: PropTypes.arrayOf(
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
  /** The Search Button the Search Bar displays. */
  searchButton: PropTypes.node,
};
