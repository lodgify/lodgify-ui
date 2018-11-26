import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'elements/Button';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';

import { SearchBar } from '../../general-widgets/SearchBar/index';

import { getSummaryMarkup } from './utils/getSummaryMarkup';

export const Component = ({
  getIsDayBlocked,
  guestsOptions,
  isFixed,
  modalTrigger,
  onChangeInput,
  onSubmit,
  searchButton,
  summaryLocationName,
  summaryNightPrice,
  summaryPropertyName,
  summaryRatingNumber,
}) => {
  const summaryProps = {
    locationName: summaryLocationName,
    nightPrice: summaryNightPrice,
    propertyName: summaryPropertyName,
    ratingNumber: summaryRatingNumber,
  };

  return (
    <div className="property-page-searchbar">
      <ShowOnDesktop>
        <SearchBar
          getIsDayBlocked={getIsDayBlocked}
          guestsOptions={guestsOptions}
          isFixed={isFixed}
          onChangeInput={onChangeInput}
          onSubmit={onSubmit}
          searchButton={searchButton}
          summaryElement={getSummaryMarkup({
            areOnlyNightPriceAndRatingDisplayed: false,
            ...summaryProps,
          })}
        />
      </ShowOnDesktop>
      <ShowOnMobile>
        <SearchBar
          guestsOptions={guestsOptions}
          isDisplayedAsModal
          isFixed={isFixed}
          modalSummaryElement={getSummaryMarkup({
            areOnlyNightPriceAndRatingDisplayed: false,
            ...summaryProps,
          })}
          modalTrigger={modalTrigger}
          onChangeInput={onChangeInput}
          summaryElement={getSummaryMarkup({
            areOnlyNightPriceAndRatingDisplayed: true,
            ...summaryProps,
          })}
        />
      </ShowOnMobile>
    </div>
  );
};

Component.displayName = 'PropertyPageSearchBar';

Component.defaultProps = {
  getIsDayBlocked: undefined,
  modalTrigger: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
  isFixed: true,
  onChangeInput: undefined,
  onSubmit: undefined,
  searchButton: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
};

Component.propTypes = {
  /**
   * A function called for each day to be displayed in the DateRangePicker. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  getIsDayBlocked: PropTypes.func,
  /** The options that the user can select in the guests field. */
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
  /**
   * Is the Search Bar fixed to the bottom of the window
   * Used for demo purposes
   * @ignore
   */
  isFixed: PropTypes.bool,
  /** The element to be clicked to display the modal. */
  modalTrigger: PropTypes.node,
  /** A function called when a change in an input occurs in the search bar.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  // eslint-disable-next-line react/no-unused-prop-types
  onChangeInput: PropTypes.func,
  /** The function to call when the search bar is submitted.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  onSubmit: PropTypes.func,
  /** The Search Button the Search Bar displays. */
  searchButton: PropTypes.node,
  /** The location name displayed in the summary. */
  summaryLocationName: PropTypes.string.isRequired,
  /** The price per night of the property, with currency symbol, displayed in the summary. */
  summaryNightPrice: PropTypes.string.isRequired,
  /** The property name displayed in the summary. */
  summaryPropertyName: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5, displayed in the summary. */
  summaryRatingNumber: PropTypes.number.isRequired,
};
