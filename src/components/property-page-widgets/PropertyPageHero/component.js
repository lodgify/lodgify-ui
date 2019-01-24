import React from 'react';
import PropTypes from 'prop-types';

import { withResponsive } from 'utils/with-responsive';
import { Hero } from 'collections/Hero';
import { VIEW_MORE_PICTURES } from 'utils/default-strings';
import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';

import { BOTTOM_OFFSET } from './constants';
import { getGalleryMarkup } from './utils/getGalleryMarkup';

/**
 * A homepage hero displays a hero with heading and a search bar on desktop screens.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  activeNavigationItemIndex,
  headerLogoSizes,
  headerLogoSrc,
  headerLogoSrcSet,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  images,
  propertyName,
  ratingNumber,
  searchBarGetIsDayBlocked,
  searchBarGuestsOptions,
  searchBarLocationOptions,
  searchBarModalHeadingText,
  searchBarSearchButton,
  secondaryButtonText,
  searchBarOnChangeInput,
  searchBarOnSubmit,
}) => {
  const {
    imageUrl: backgroundImageUrl,
    sizes: backgroundImageSizes,
    srcSet: backgroundImageSrcSet,
    placeholderImageUrl,
    imageWidth: backgroundImageHeight,
    imageHeight: backgroundImageWidth,
  } = images[0];

  return (
    <Hero
      activeNavigationItemIndex={activeNavigationItemIndex}
      backgroundImageHeight={backgroundImageHeight}
      backgroundImageSizes={backgroundImageSizes}
      backgroundImageSrcSet={backgroundImageSrcSet}
      backgroundImageUrl={backgroundImageUrl}
      backgroundImageWidth={backgroundImageWidth}
      bottomOffset={BOTTOM_OFFSET}
      headerLogoSizes={headerLogoSizes}
      headerLogoSrc={headerLogoSrc}
      headerLogoSrcSet={headerLogoSrcSet}
      headerLogoText={headerLogoText}
      headerNavigationItems={headerNavigationItems}
      headerPrimaryCTA={headerPrimaryCTA}
      headerSearchBarGuestsOptions={searchBarGuestsOptions}
      headerSearchBarLocationOptions={searchBarLocationOptions}
      headerSearchBarModalHeadingText={searchBarModalHeadingText}
      headerSearchBarSearchButton={searchBarSearchButton}
      isFixedSearchBarDisplayed
      placeholderBackgroundImageUrl={placeholderImageUrl}
      searchBarGetIsDayBlocked={searchBarGetIsDayBlocked}
      searchBarOnChangeInput={searchBarOnChangeInput}
      searchBarOnSubmit={searchBarOnSubmit}
    >
      {getGalleryMarkup(
        images,
        propertyName,
        ratingNumber,
        secondaryButtonText
      )}
    </Hero>
  );
};

Component.displayName = 'PropertyPageHero';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  headerLogoSizes: undefined,
  headerLogoSrc: null,
  headerLogoSrcSet: undefined,
  headerPrimaryCTA: null,
  propertyName: null,
  ratingNumber: null,
  searchBarGetIsDayBlocked: undefined,
  searchBarModalHeadingText: CHECK_OUR_AVAILABILITY,
  searchBarSearchButton: undefined,
  secondaryButtonText: VIEW_MORE_PICTURES,
  searchBarOnChangeInput: undefined,
  searchBarOnSubmit: undefined,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: PropTypes.number,
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
          text: PropTypes.string.isRequired,
        })
      ),
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
  /** The images to display in the gallery modal. */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /** Alternative text to show if the image can't be loaded by the browser */
      alternativeText: PropTypes.string,
      /** The natural height of the image. */
      imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      /** The label text for the when the image is not found. */
      imageNotFoundLabelText: PropTypes.string,
      /** Title of the image to show when hovering it on desktop browsers */
      imageTitle: PropTypes.string,
      /** URL pointing to the image to display. */
      imageUrl: PropTypes.string.isRequired,
      /** The natural width of the image. */
      imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      /** A visible label for the image. */
      label: PropTypes.string.isRequired,
      /** URL pointing to the placeholder image to display. */
      placeholderImageUrl: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      sizes: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      srcSet: PropTypes.string,
    })
  ).isRequired,
  /** The name of the property to display in the gallery modal. */
  propertyName: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number,
  /**
   * A function called for each day to be displayed in the DateRangePicker.
   * Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  searchBarGetIsDayBlocked: PropTypes.func,
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
  ).isRequired,
  /* The heading displayed in the search bar modal. */
  searchBarModalHeadingText: PropTypes.string,
  /** A function called when a change in an input occurs in the search bar.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  // eslint-disable-next-line react/no-unused-prop-types
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
  /** The text to display on the secondary button at the bottom of the hero. */
  secondaryButtonText: PropTypes.string,
};

export const ComponentWithResponsive = withResponsive(Component);
