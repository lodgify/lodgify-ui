import React from 'react';
import PropTypes from 'prop-types';

import { withResponsive } from 'utils/with-responsive';
import { Hero } from 'collections/Hero';
import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Button } from 'elements/Button';
import { SEARCH } from 'utils/default-strings';

import { getSearchBarMarkup } from './utils/getSearchBarMarkup';

/**
 * A homepage hero displays a header, heading and search bar
 * in a full width and hight container
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  backgroundImageUrl,
  searchBarGetIsDayBlocked,
  headerLogoSrc,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  heading,
  isUserOnMobile,
  isSearchBarDisplayedAsModal,
  isSearchBarShowingLocationDropdown,
  isSearchBarShowingSummary,
  searchBarGuestsOptions,
  searchBarLocationOptions,
  searchBarModalHeadingText,
  searchBarModalSummaryElement,
  searchBarModalTrigger,
  searchBarOnSubmit,
  searchBarSearchButton,
  searchBarSummaryElement,
}) => {
  const props = {
    backgroundImageUrl: backgroundImageUrl,
    headerLogoSrc: headerLogoSrc,
    headerLogoText: headerLogoText,
    headerNavigationItems: headerNavigationItems,
    headerPrimaryCTA: headerPrimaryCTA,
    headerSearchBarGuestsOptions: searchBarGuestsOptions,
    headerSearchBarLocationOptions: searchBarLocationOptions,
    heading,
  };

  const mobileProps = {
    ...props,
    extraContent: getSearchBarMarkup({
      getIsDayBlocked: searchBarGetIsDayBlocked,
      isDisplayedAsModal: isSearchBarDisplayedAsModal,
      isShowingLocationDropdown: isSearchBarShowingLocationDropdown,
      isShowingSummary: isSearchBarShowingSummary,
      guestsOptions: searchBarGuestsOptions,
      locationOptions: searchBarLocationOptions,
      modalHeadingText: searchBarModalHeadingText,
      modalSummaryElement: searchBarModalSummaryElement,
      modalTrigger: searchBarModalTrigger,
      onSubmit: searchBarOnSubmit,
      searchButton: searchBarSearchButton,
      summaryElement: searchBarSummaryElement,
    }),
  };

  return isUserOnMobile ? <Hero {...props} /> : <Hero {...mobileProps} />;
};

Component.displayName = 'HomepageHero';

Component.defaultProps = {
  searchBarGetIsDayBlocked: Function.prototype,
  headerLogoSrc: null,
  headerPrimaryCTA: null,
  heading: null,
  isSearchBarDisplayedAsModal: false,
  isSearchBarShowingLocationDropdown: false,
  isSearchBarShowingSummary: false,
  searchBarOnSubmit: Function.prototype,
  searchBarModalHeadingText: CHECK_OUR_AVAILABILITY,
  searchBarModalSummaryElement: null,
  searchBarModalTrigger: <Icon name={ICON_NAMES.SEARCH} />,
  searchBarSearchButton: (
    <Button icon={ICON_NAMES.SEARCH} isPositionedRight isRounded>
      {SEARCH}
    </Button>
  ),
  searchBarSummaryElement: null,
};

Component.propTypes = {
  /** The background image url of the hero. */
  backgroundImageUrl: PropTypes.string.isRequired,
  /** The src url for the logo in the header. */
  headerLogoSrc: PropTypes.string,
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
    /** The href url for the call to action. */
    href: PropTypes.string.isRequired,
    /** The  visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
  /** The text for the heading displayed in the middle of the hero. */
  heading: PropTypes.string,
  /** Is the search bar displayed in a modal. */
  isSearchBarDisplayedAsModal: PropTypes.bool,
  /** Is search bar showing the location dropdown. */
  isSearchBarShowingLocationDropdown: PropTypes.bool,
  /** Is search bar showing the property summary info. */
  isSearchBarShowingSummary: PropTypes.bool,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
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
  /** The heading text to display in the search bar modal. */
  searchBarModalHeadingText: PropTypes.string,
  /** The summary element to display in the mobile search bar modal.  */
  searchBarModalSummaryElement: PropTypes.node,
  /** The element to be clicked to display the search bar modal. */
  searchBarModalTrigger: PropTypes.node,
  /** The function to call when the search bar is submitted.
   *  @param {Object} values - The values of the inputs in the search bar.
   *  @param {Object} values.dates
   *  @param {String} values.guests
   *  @param {String} values.location
   */
  searchBarOnSubmit: PropTypes.func,
  /** The search button the search bar displays. */
  searchBarSearchButton: PropTypes.node,
  /** The element to display in the fixed container. */
  searchBarSummaryElement: PropTypes.node,
};

export const ComponentWithResponsive = withResponsive(Component);
