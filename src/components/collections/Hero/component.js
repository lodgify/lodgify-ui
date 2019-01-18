import React from 'react';
import PropTypes from 'prop-types';

import { Header } from 'collections/Header';
import { FullBleed } from 'media/FullBleed';

import { DEFAULT_BOTTOM_OFFSET } from './constants';

/**
 * A hero displays a header and optional children with a full bleed image background
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  activeNavigationItemIndex,
  backgroundImageUrl,
  backgroundImageSizes,
  backgroundImageSrcSet,
  bottomOffset,
  children,
  headerLogoSizes,
  headerLogoSrc,
  headerLogoSrcSet,
  headerLogoText,
  headerNavigationItems,
  headerOnCloseSearchBarModal,
  headerPrimaryCTA,
  headerSearchBarGuestsOptions,
  headerSearchBarLocationOptions,
  headerSearchBarModalHeadingText,
  headerSearchBarSearchButton,
  isHeaderSearchBarModalOpen,
  placeholderBackgroundImageUrl,
  searchBarGetIsDayBlocked,
  searchBarOnChangeInput,
  searchBarOnSubmit,
}) => (
  <FullBleed
    bottomOffset={bottomOffset}
    hasGradient
    imageUrl={backgroundImageUrl}
    placeholderImageUrl={placeholderBackgroundImageUrl}
    sizes={backgroundImageSizes}
    srcSet={backgroundImageSrcSet}
  >
    <Header
      activeNavigationItemIndex={activeNavigationItemIndex}
      isSearchBarModalOpen={isHeaderSearchBarModalOpen}
      logoSizes={headerLogoSizes}
      logoSrc={headerLogoSrc}
      logoSrcSet={headerLogoSrcSet}
      logoText={headerLogoText}
      navigationItems={headerNavigationItems}
      onCloseSearchBarModal={headerOnCloseSearchBarModal}
      primaryCTA={headerPrimaryCTA}
      searchBarGetIsDayBlocked={searchBarGetIsDayBlocked}
      searchBarGuestsOptions={headerSearchBarGuestsOptions}
      searchBarLocationOptions={headerSearchBarLocationOptions}
      searchBarModalHeadingText={headerSearchBarModalHeadingText}
      searchBarOnChangeInput={searchBarOnChangeInput}
      searchBarOnSubmit={searchBarOnSubmit}
      searchBarSearchButton={headerSearchBarSearchButton}
    />
    {children}
  </FullBleed>
);

Component.displayName = 'Hero';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  bottomOffset: DEFAULT_BOTTOM_OFFSET,
  children: null,
  headerLogoSizes: undefined,
  headerLogoSrc: null,
  headerLogoSrcSet: undefined,
  headerOnCloseSearchBarModal: undefined,
  headerPrimaryCTA: null,
  headerSearchBarGuestsOptions: [],
  headerSearchBarLocationOptions: [],
  headerSearchBarModalHeadingText: null,
  headerSearchBarSearchButton: undefined,
  isHeaderSearchBarModalOpen: undefined,
  placeholderBackgroundImageUrl: null,
  searchBarGetIsDayBlocked: undefined,
  searchBarOnChangeInput: undefined,
  searchBarOnSubmit: undefined,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: PropTypes.number,
  /** A list of one or more strings separated by commas indicating a set of source sizes for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSrcSet: PropTypes.string,
  /** The source url of the hero's background image. */
  backgroundImageUrl: PropTypes.string.isRequired,
  /** Reduce the height of the Hero with an offset, supports CSS dimensions. */
  bottomOffset: PropTypes.string,
  /** The children displayed between the header and the bottom of the hero. */
  children: PropTypes.node,
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
  /** A function called when a close event happens on the search bar modal in the header. Used when consuming `Hero` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  headerOnCloseSearchBarModal: PropTypes.func,
  /** An optional primary call to action to display as a [`<Button />`](#button) in the header. */
  headerPrimaryCTA: PropTypes.shape({
    /** The on click handler for the call to action. */
    onClick: PropTypes.func.isRequired,
    /** The  visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
  /** The options which the user can select in the guests field in the search bar. */
  headerSearchBarGuestsOptions: PropTypes.arrayOf(
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
  ),
  /** The options which the user can select in the location field in the search bar. */
  headerSearchBarLocationOptions: PropTypes.arrayOf(
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
  ),
  /** The heading displayed in the Search Bar modal. */
  headerSearchBarModalHeadingText: PropTypes.string,
  /** The Search Button the Search Bar modal displays. */
  headerSearchBarSearchButton: PropTypes.node,
  /** Is the search bar modal in the header open. Used when consuming `Hero` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  isHeaderSearchBarModalOpen: PropTypes.bool,
  /** The background placeholder image url of the hero. */
  placeholderBackgroundImageUrl: PropTypes.string,
  /**
   * A function called for each day to be displayed in the DateRangePicker.
   * Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  searchBarGetIsDayBlocked: PropTypes.func,
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
};
