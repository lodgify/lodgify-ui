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

import { FullBleed } from 'media/FullBleed';
import { ContactHeader } from 'collections/ContactHeader';
import { FlexContainer } from 'layout/FlexContainer';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { SearchBar } from 'general-widgets/SearchBar';
import { ShowOn } from 'layout/ShowOn';

import { DEFAULT_BOTTOM_OFFSET } from './constants';

/**
 * A hero displays a header and optional children with a full bleed image background
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  backgroundImageHeight,
  backgroundImageSizes,
  backgroundImageSrcSet,
  backgroundImageUrl,
  backgroundImageWidth,
  bottomOffset,
  callToActionText,
  className,
  currencyNoResultsText,
  currencyOptions,
  currencyValue,
  headingHref,
  headingText,
  isSearchBarDateRangePickerLoading,
  languageOptions,
  languageValue,
  navigationMenuItems,
  phoneNumber,
  placeholderBackgroundImageUrl,
  primaryButtonText,
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
  searchBarModalHeadingText,
  searchBarOnChangeInput,
  searchBarOnSubmit,
  searchBarSearchButton,
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
    <FullBleed
      bottomOffset={bottomOffset}
      className={className}
      hasGradient
      imageHeight={backgroundImageHeight}
      imageUrl={backgroundImageUrl}
      imageWidth={backgroundImageWidth}
      placeholderImageUrl={placeholderBackgroundImageUrl}
      sizes={backgroundImageSizes}
      srcSet={backgroundImageSrcSet}
    >
      <ContactHeader
        className={className}
        currencyNoResultsText={currencyNoResultsText}
        currencyOptions={currencyOptions}
        currencyValue={currencyValue}
        headingHref={headingHref}
        headingText={headingText}
        isBackgroundFilled
        languageOptions={languageOptions}
        languageValue={languageValue}
        navigationMenuItems={navigationMenuItems}
        phoneNumber={phoneNumber}
        primaryButtonText={primaryButtonText}
      />
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
            {callToActionText}
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
            {callToActionText}
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
    </FullBleed>
  );
};

Component.displayName = 'ContactHomeHero';

Component.defaultProps = {
  backgroundImageHeight: undefined,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  backgroundImageWidth: undefined,
  bottomOffset: DEFAULT_BOTTOM_OFFSET,
  callToActionText: '',
  className: null,
  currencyNoResultsText: '',
  currencyOptions: [],
  currencyValue: null,
  headingHref: '',
  headingText: '',
  isHeaderBackgroundFilled: false,
  isSearchBarDateRangePickerLoading: undefined,
  languageOptions: [],
  languageValue: null,
  onChangeCurrency: undefined,
  onChangeLanguage: undefined,
  phoneNumber: '',
  placeholderBackgroundImageUrl: null,
  primaryButtonText: '',
  searchBarDateRangePickerLocaleCode: undefined,
  searchBarDatesCheckInLabel: undefined,
  searchBarDatesCheckOutLabel: undefined,
  searchBarDatesInputFocusedInput: undefined,
  searchBarDatesInputOnFocusChange: Function.prototype,
  searchBarDatesInputValue: null,
  searchBarGetIsDayBlocked: undefined,
  searchBarGuestsInputLabel: undefined,
  searchBarGuestsInputValue: null,
  searchBarLocationInputLabel: undefined,
  searchBarLocationInputValue: undefined,
  searchBarLocationOptions: undefined,
  searchBarMaximumGuestsInputValue: undefined,
  searchBarModalHeadingText: undefined,
  searchBarOnChangeInput: undefined,
  searchBarOnSubmit: Function.prototype,
  searchBarSearchButton: undefined,
};

Component.propTypes = {
  /** The natural height of the background image. */
  backgroundImageHeight: oneOfType([string, number]),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSizes: string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSrcSet: string,
  /** The source url of the hero's background image. */
  backgroundImageUrl: string.isRequired,
  /** The natural width of the background image. */
  backgroundImageWidth: oneOfType([string, number]),
  /** Reduce the height of the Hero with an offset, supports CSS dimensions. */
  bottomOffset: string,
  /** The text to display at the center of the hero image. */
  callToActionText: string,
  /** The custom classes. */
  className: string,
  /** The text to display when no results are returned from the currency dropdown. */
  currencyNoResultsText: string,
  /** The options which the user can select for the currency dropdown. */
  currencyOptions: arrayOf(
    shape({
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The current value of the currency dropdown. */
  currencyValue: oneOfType([bool, number, string]),
  /** The link for the heading. */
  headingHref: string,
  /** The text for the heading. */
  headingText: string,
  /** The background of the header is a solid color. */
  isHeaderBackgroundFilled: bool,
  /** Is the search bar date range picker in a state of loading. */
  isSearchBarDateRangePickerLoading: bool,
  /** The options which the user can select for the language dropdown. */
  languageOptions: arrayOf(
    shape({
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The current value of the language dropdown. */
  languageValue: oneOfType([bool, number, string]),
  /** The items for a user to navigate the site. */
  navigationMenuItems: arrayOf(
    shape({
      /** The href url for an item which is a link. */
      href: string,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: arrayOf(
        shape({
          href: string.isRequired,
          target: string,
          text: string.isRequired,
        })
      ),
      /** Specifies where to display the linked navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: string,
      /** The visible text for an item. */
      text: string.isRequired,
    })
  ).isRequired,
  /** The function called when the currency dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeCurrency: func,
  /** The function called when the language dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeLanguage: func,
  /** The phone number to display. */
  phoneNumber: string,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the search bars date range picker. */
  placeholderBackgroundImageUrl: string,
  /** The text to display for the primary button. */
  primaryButtonText: string,
  /** The label for the date picker check in input of the search bar when there is no value selected. */
  searchBarDateRangePickerLocaleCode: string,
  /** The label for the date picker check out input of the search bar when there is no value selected. */
  searchBarDatesCheckInLabel: string,
  /** The field of the dates input which is currently focused. Used when consuming `PropertyPageSearchBar` as a controlled component. */
  searchBarDatesCheckOutLabel: string,
  /**
   * A function called when the focus state of the dates input in the search bar changes.
   * @param {String} inputName
   */
  searchBarDatesInputFocusedInput: oneOf([null, 'startDate', 'endDate']),
  /** The value for the dates input of the search bar. Used when consuming `HomepageHero` as a controlled component. */
  searchBarDatesInputOnFocusChange: func,
  /**
   * A function called for each day to be displayed in the DateRangePicker.
   * Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  searchBarDatesInputValue: shape({
    endDate: object,
    startDate: object,
  }),
  /** The label for the guests input of the search bar. */
  searchBarGetIsDayBlocked: func,
  /** The value for the guests input of the search bar. Used when consuming `HomepageHero` as a controlled component. */
  searchBarGuestsInputLabel: string,
  /** The label for the location input of the search bar when there is no option selected. */
  searchBarGuestsInputValue: number,
  /** The value for the location input of the search bar. Used when consuming `HomepageHero` as a controlled component. */
  searchBarLocationInputLabel: string,
  /** The options which the user can select in the location field of the search bar. */
  searchBarLocationInputValue: string,
  /** The maximum number the guests input counter can increase to. */
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
  /* The heading displayed in the search bar modal. */
  searchBarMaximumGuestsInputValue: number,
  /** A function called when a change in an input occurs in the search bar.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  searchBarModalHeadingText: string,
  /** The function to call when the search bar is submitted.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  searchBarOnChangeInput: func,
  /** The search button the search bar displays. */
  searchBarOnSubmit: func,
  /** The background placeholder image url of the hero. */
  searchBarSearchButton: node,
};
