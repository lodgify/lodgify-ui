import 'semantic-ui-styles/search-bar.less';
import 'semantic-ui-styles/property-page-search-bar.less';
import React from 'react';
import PropTypes from 'prop-types';

import { PER_NIGHT } from 'utils/default-strings';
import { Button } from 'elements/Button';
import { ShowOn } from 'layout/ShowOn';
import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';
import { SearchBar } from 'general-widgets/SearchBar';

import { getSummaryMarkup } from './utils/getSummaryMarkup';

/**
 * A property page search bar displays a sticky footer with a property summary and an availability search.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  dateRangePickerLocaleCode,
  datesInputFocusedInput,
  datesInputOnFocusChange,
  datesInputValue,
  getIsDayBlocked,
  guestsInputValue,
  guestsOptions,
  isShowingPlaceholder,
  onChangeInput,
  onSubmit,
  searchButton,
  summaryLocationName,
  summaryPeriodText,
  summaryPricePerPeriod,
  summaryPropertyName,
  summaryRatingNumber,
}) => {
  const sharedProps = {
    dateRangePickerLocaleCode,
    datesInputFocusedInput,
    datesInputOnFocusChange,
    datesInputValue,
    getIsDayBlocked,
    guestsInputValue,
    guestsOptions,
    dateRangePickerLocaleCode,
    datesInputValue,
    datesInputOnFocusChange,
    getIsDayBlocked,
    guestsInputValue,
    guestsOptions,
    isFixed: true,
    onChangeInput,
    onSubmit,
    searchButton,
  };
  const summaryProps = {
    locationName: summaryLocationName,
    periodText: summaryPeriodText,
    pricePerPeriod: summaryPricePerPeriod,
    propertyName: summaryPropertyName,
    ratingNumber: summaryRatingNumber,
    isShowingPlaceholder,
  };

  return (
    <div className="property-page-searchbar">
      <ShowOn computer widescreen>
        <SearchBar
          {...sharedProps}
          summaryElement={getSummaryMarkup({
            areOnlyNightPriceAndRatingDisplayed: false,
            ...summaryProps,
          })}
        />
      </ShowOn>
      <ShowOn mobile tablet>
        <SearchBar
          {...sharedProps}
          isDisplayedAsModal
          modalSummaryElement={getSummaryMarkup({
            areOnlyNightPriceAndRatingDisplayed: false,
            ...summaryProps,
          })}
          summaryElement={getSummaryMarkup({
            areOnlyNightPriceAndRatingDisplayed: true,
            ...summaryProps,
          })}
        />
      </ShowOn>
    </div>
  );
};

Component.displayName = 'PropertyPageSearchBar';

Component.defaultProps = {
  dateRangePickerLocaleCode: undefined,
  datesInputFocusedInput: undefined,
  datesInputOnFocusChange: Function.prototype,
  datesInputValue: undefined,
  getIsDayBlocked: undefined,
  guestsInputValue: undefined,
  isShowingPlaceholder: false,
  onChangeInput: undefined,
  onSubmit: undefined,
  searchButton: (
    <Button isFormSubmit isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
  summaryPeriodText: PER_NIGHT,
  summaryPricePerPeriod: undefined,
  summaryRatingNumber: undefined,
};

Component.propTypes = {
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the date range picker. */
  // eslint-disable-next-line react/no-unused-prop-types
  dateRangePickerLocaleCode: PropTypes.string,
  /** The field of the dates input which is currently focused. Used when consuming `PropertyPageSearchBar` as a controlled component. */
  datesInputFocusedInput: PropTypes.oneOf([null, 'startDate', 'endDate']),
  /**
   * A function called when the focus state of the dates input changes.
   * @param {String} inputName
   */
  datesInputOnFocusChange: PropTypes.func,
  /** The value for the dates input of the search bar. Used when consuming `PropertyPageSearchBar` as a controlled component. */
  datesInputValue: PropTypes.shape({
    endDate: PropTypes.object,
    startDate: PropTypes.object,
  }),
  /**
   * A function called for each day to be displayed in the DateRangePicker. Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  getIsDayBlocked: PropTypes.func,
  /** The value for the guests input of the search bar. Used when consuming `PropertyPageSearchBar` as a controlled component. */
  guestsInputValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
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
  /** A function called when a change in an input occurs in the search bar.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
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
  /** The text describing the pricing period */
  summaryPeriodText: PropTypes.string,
  /** The price per night of the property, with currency symbol, displayed in the summary. */
  summaryPricePerPeriod: PropTypes.string,
  /** The property name displayed in the summary. */
  summaryPropertyName: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5, displayed in the summary. */
  summaryRatingNumber: PropTypes.number,
};
