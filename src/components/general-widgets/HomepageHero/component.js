import React from 'react';
import PropTypes from 'prop-types';

import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';
import { FlexContainer } from 'layout/FlexContainer';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { Hero } from 'collections/Hero';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { SearchBar } from 'general-widgets/SearchBar';
import { ShowOn } from 'layout/ShowOn';

/**
 * A homepage hero displays a hero with heading and a search bar on desktop screens.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  activeNavigationItemIndex,
  backgroundImageHeight,
  backgroundImageSizes,
  backgroundImageSrcSet,
  backgroundImageUrl,
  backgroundImageWidth,
  headerLogoHref,
  headerLogoSizes,
  headerLogoSrc,
  headerLogoSrcSet,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  headingText,
  placeholderBackgroundImageUrl,
  searchBarDateRangePickerLocaleCode,
  searchBarDatesInputInitialValue,
  searchBarGetIsDayBlocked,
  searchBarGuestsInputInitialValue,
  searchBarGuestsOptions,
  searchBarLocationInputInitialValue,
  searchBarLocationOptions,
  searchBarModalHeadingText,
  searchBarOnChangeInput,
  searchBarOnSubmit,
  searchBarSearchButton,
}) => (
  <Hero
    activeNavigationItemIndex={activeNavigationItemIndex}
    backgroundImageHeight={backgroundImageHeight}
    backgroundImageSizes={backgroundImageSizes}
    backgroundImageSrcSet={backgroundImageSrcSet}
    backgroundImageUrl={backgroundImageUrl}
    backgroundImageWidth={backgroundImageWidth}
    headerLogoHref={headerLogoHref}
    headerLogoSizes={headerLogoSizes}
    headerLogoSrc={headerLogoSrc}
    headerLogoSrcSet={headerLogoSrcSet}
    headerLogoText={headerLogoText}
    headerNavigationItems={headerNavigationItems}
    headerPrimaryCTA={headerPrimaryCTA}
    placeholderBackgroundImageUrl={placeholderBackgroundImageUrl}
  >
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
                datesInputInitialValue: searchBarDatesInputInitialValue,
                dateRangePickerLocaleCode: searchBarDateRangePickerLocaleCode,
                getIsDayBlocked: searchBarGetIsDayBlocked,
                guestsInputInitialValue: searchBarGuestsInputInitialValue,
                guestsOptions: searchBarGuestsOptions,
                locationInputInitialValue: searchBarLocationInputInitialValue,
                locationOptions: searchBarLocationOptions,
                onChangeInput: searchBarOnChangeInput,
                onSubmit: searchBarOnSubmit,
                searchButton: searchBarSearchButton,
                willDropdownsOpenAbove: true,
              }}
              tablet
              widescreen
            />
            <ShowOn mobile>
              <SearchBar
                dateRangePickerLocaleCode={searchBarDateRangePickerLocaleCode}
                datesInputInitialValue={searchBarDatesInputInitialValue}
                getIsDayBlocked={searchBarGetIsDayBlocked}
                guestsInputInitialValue={searchBarGuestsInputInitialValue}
                guestsOptions={searchBarGuestsOptions}
                isDisplayedAsModal
                locationInputInitialValue={searchBarLocationInputInitialValue}
                locationOptions={searchBarLocationOptions}
                modalHeadingText={searchBarModalHeadingText}
                onChangeInput={searchBarOnChangeInput}
                onSubmit={searchBarOnSubmit}
                searchButton={searchBarSearchButton}
              />
            </ShowOn>
          </GridRow>
        </Grid>
      </HorizontalGutters>
    </FlexContainer>
  </Hero>
);

Component.displayName = 'HomepageHero';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  backgroundImageHeight: undefined,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  backgroundImageWidth: undefined,
  searchBarDatesInputInitialValue: undefined,
  searchBarGuestsInputInitialValue: undefined,
  headerLogoHref: undefined,
  headerLogoSizes: undefined,
  headerLogoSrc: null,
  headerLogoSrcSet: undefined,
  headerPrimaryCTA: null,
  headingText: null,
  searchBarLocationInputInitialValue: undefined,
  placeholderBackgroundImageUrl: null,
  searchBarDateRangePickerLocaleCode: undefined,
  searchBarGetIsDayBlocked: undefined,
  searchBarLocationOptions: undefined,
  searchBarModalHeadingText: CHECK_OUR_AVAILABILITY,
  searchBarOnChangeInput: undefined,
  searchBarOnSubmit: Function.prototype,
  searchBarSearchButton: undefined,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: PropTypes.number,
  /** The natural height of the background image. */
  backgroundImageHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSrcSet: PropTypes.string,
  /** The source url of the hero's background image. */
  backgroundImageUrl: PropTypes.string.isRequired,
  /** The natural width of the background image. */
  backgroundImageWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** The href for the header logo link. */
  headerLogoHref: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes for the header logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  headerLogoSizes: PropTypes.string,
  /** The src url for the logo in the header. */
  headerLogoSrc: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the header logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  headerLogoSrcSet: PropTypes.string,
  /** The text for the logo in the header. */
  headerLogoText: PropTypes.string.isRequired,
  /** The items for a user to navigate the site. */
  headerNavigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      /** The href url for an item which is a link. */
      href: PropTypes.string,
      /** Sub navigation items to display as a [`<Submenu />`](#submenu) under an item. */
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          href: PropTypes.string.isRequired,
          target: PropTypes.string,
          text: PropTypes.string.isRequired,
        })
      ),
      /** Specifies where to display the linked header navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: PropTypes.string,
      /** The visible text for an item. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** An optional primary call to action to display as a [`<Button />`](#button) in the header. */
  headerPrimaryCTA: PropTypes.shape({
    /** The on click handler for the call to action. */
    onClick: PropTypes.func.isRequired,
    /** The  visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
  /** The text for the heading displayed in the middle of the hero. */
  headingText: PropTypes.string,
  /** The background placeholder image url of the hero. */
  placeholderBackgroundImageUrl: PropTypes.string,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the search bars date range picker. */
  searchBarDateRangePickerLocaleCode: PropTypes.string,
  /** The initial value for the dates input of the search bar. */
  searchBarDatesInputInitialValue: PropTypes.shape({
    endDate: PropTypes.object,
    startDate: PropTypes.object,
  }),
  /**
   * A function called for each day to be displayed in the DateRangePicker.
   * Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  searchBarGetIsDayBlocked: PropTypes.func,
  /** The initial value for the guests input of the search bar. */
  searchBarGuestsInputInitialValue: PropTypes.string,
  /** The options which the user can select in the guests fields of the search bar. */
  searchBarGuestsOptions: PropTypes.arrayOf(
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
  /** The initial value for the location input of the search bar. */
  searchBarLocationInputInitialValue: PropTypes.string,
  /** The options which the user can select in the location field of the search bar. */
  searchBarLocationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The indent level of a location option. One of: 0, 1, 2, 3, 4, 5 */
      indent: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
  /* The heading displayed in the search bar modal. */
  searchBarModalHeadingText: PropTypes.string,
  /** A function called when a change in an input occurs in the search bar.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  searchBarOnChangeInput: PropTypes.func,
  /** The function to call when the search bar is submitted.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  searchBarOnSubmit: PropTypes.func,
  /** The search button the search bar displays. */
  searchBarSearchButton: PropTypes.node,
};
