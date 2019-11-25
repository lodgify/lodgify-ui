import React from 'react';
import {
  string,
  bool,
  oneOf,
  func,
  shape,
  object,
  number,
  oneOfType,
  node,
  arrayOf,
} from 'prop-types';

import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';
import { FlexContainer } from 'layout/FlexContainer';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { SearchBar } from 'general-widgets/SearchBar';
import { ShowOn } from 'layout/ShowOn';

// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  headingText,
  searchBarModalHeadingText,
  searchBarDateRangePickerLocaleCode,
  searchBarDatesCheckInLabel,
  searchBarDatesCheckOutLabel,
  searchBarDatesInputFocusedInput,
  searchBarDatesInputOnFocusChange,
  searchBarDatesInputValue,
  searchBarGetIsDayBlocked,
  searchBarGuestsInputLabel,
  searchBarGuestsInputValue,
  searchBarLocationInputLabel,
  searchBarLocationInputValue,
  searchBarLocationOptions,
  searchBarMaximumGuestsInputValue,
  searchBarOnChangeInput,
  searchBarOnSubmit,
  searchBarSearchButton,
  isSearchBarDateRangePickerLoading,
}) => {
  const searchBarSharedProps = {
    dateRangePickerLocaleCode: searchBarDateRangePickerLocaleCode,
    datesCheckInLabel: searchBarDatesCheckInLabel,
    datesCheckOutLabel: searchBarDatesCheckOutLabel,
    datesInputFocusedInput: searchBarDatesInputFocusedInput,
    datesInputOnFocusChange: searchBarDatesInputOnFocusChange,
    datesInputValue: searchBarDatesInputValue,
    getIsDayBlocked: searchBarGetIsDayBlocked,
    guestsInputLabel: searchBarGuestsInputLabel,
    guestsInputValue: searchBarGuestsInputValue,
    locationInputLabel: searchBarLocationInputLabel,
    locationInputValue: searchBarLocationInputValue,
    locationOptions: searchBarLocationOptions,
    maximumGuestsInputValue: searchBarMaximumGuestsInputValue,
    onChangeInput: searchBarOnChangeInput,
    onSubmit: searchBarOnSubmit,
    searchButton: searchBarSearchButton,
    isDateRangePickerLoading: isSearchBarDateRangePickerLoading,
  };

  return (
    <FlexContainer
      alignItems="center"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <HorizontalGutters>
        <ShowOn
          computer
          parent={Heading}
          parentProps={{
            isColorInverted: true,
            size: 'huge',
            textAlign: 'center',
          }}
          tablet
          widescreen
        >
          {headingText}
        </ShowOn>
        <ShowOn
          mobile
          parent={Heading}
          parentProps={{
            isColorInverted: true,
            size: 'large',
            textAlign: 'center',
          }}
        >
          {headingText}
        </ShowOn>
      </HorizontalGutters>
      <HorizontalGutters>
        <Grid areColumnsCentered>
          <GridRow horizontalAlignContent="center">
            <ShowOn
              computer
              parent={SearchBar}
              parentProps={{
                ...searchBarSharedProps,
                willLocationDropdownOpenAbove: true,
              }}
              tablet
              widescreen
            />
            <ShowOn mobile>
              <SearchBar
                {...searchBarSharedProps}
                isDisplayedAsModal
                modalHeadingText={searchBarModalHeadingText}
              />
            </ShowOn>
          </GridRow>
        </Grid>
      </HorizontalGutters>
    </FlexContainer>
  );
};

Component.displayName = 'InnerContent';

Component.defaultProps = {
  searchBarDatesInputValue: undefined,
  searchBarGuestsInputValue: undefined,
  headingText: null,
  isSearchBarDateRangePickerLoading: undefined,
  searchBarLocationInputValue: undefined,
  searchBarMaximumGuestsInputValue: undefined,
  searchBarDateRangePickerLocaleCode: undefined,
  searchBarDatesCheckInLabel: undefined,
  searchBarDatesCheckOutLabel: undefined,
  searchBarDatesInputFocusedInput: undefined,
  searchBarDatesInputOnFocusChange: Function.prototype,
  searchBarGetIsDayBlocked: undefined,
  searchBarGuestsInputLabel: undefined,
  searchBarLocationInputLabel: undefined,
  searchBarLocationOptions: undefined,
  searchBarModalHeadingText: CHECK_OUR_AVAILABILITY,
  searchBarOnChangeInput: undefined,
  searchBarOnSubmit: Function.prototype,
  searchBarSearchButton: undefined,
};

Component.propTypes = {
  /** The text for the heading displayed in the middle of the hero. */
  headingText: string,
  /** Is the search bar date range picker in a state of loading. */
  isSearchBarDateRangePickerLoading: bool,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the search bars date range picker. */
  searchBarDateRangePickerLocaleCode: string,
  /** The label for the date picker check in input of the search bar when there is no value selected. */
  searchBarDatesCheckInLabel: string,
  /** The label for the date picker check out input of the search bar when there is no value selected. */
  searchBarDatesCheckOutLabel: string,
  /** The field of the dates input which is currently focused. Used when consuming `PropertyPageSearchBar` as a controlled component. */
  searchBarDatesInputFocusedInput: oneOf([null, 'startDate', 'endDate']),
  /**
   * A function called when the focus state of the dates input in the search bar changes.
   * @param {String} inputName
   */
  searchBarDatesInputOnFocusChange: func,
  /** The value for the dates input of the search bar. Used when consuming `HomepageHero` as a controlled component. */
  searchBarDatesInputValue: shape({
    endDate: object,
    startDate: object,
  }),
  /**
   * A function called for each day to be displayed in the DateRangePicker.
   * Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  searchBarGetIsDayBlocked: func,
  /** The label for the guests input of the search bar. */
  searchBarGuestsInputLabel: string,
  /** The value for the guests input of the search bar. Used when consuming `HomepageHero` as a controlled component. */
  searchBarGuestsInputValue: number,
  /** The label for the location input of the search bar when there is no option selected. */
  searchBarLocationInputLabel: string,
  /** The value for the location input of the search bar. Used when consuming `HomepageHero` as a controlled component. */
  searchBarLocationInputValue: string,
  /** The options which the user can select in the location field of the search bar. */
  searchBarLocationOptions: arrayOf(
    shape({
      /** The indent level of a location option. One of: 0, 1, 2, 3, 4, 5 */
      indent: oneOf([0, 1, 2, 3, 4, 5]),
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The maximum number the guests input counter can increase to. */
  searchBarMaximumGuestsInputValue: number,
  /* The heading displayed in the search bar modal. */
  searchBarModalHeadingText: string,
  /** A function called when a change in an input occurs in the search bar.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  searchBarOnChangeInput: func,
  /** The function to call when the search bar is submitted.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  searchBarOnSubmit: func,
  /** The search button the search bar displays. */
  searchBarSearchButton: node,
};
