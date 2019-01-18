import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Menu } from 'semantic-ui-react';

import { HorizontalGutters } from 'layout/HorizontalGutters';

import { getLogoMarkup } from './utils/getLogoMarkup';
import { getHiddenMenuMarkup } from './utils/getHiddenMenuMarkup';
import { getStandardMenuMarkup } from './utils/getStandardMenuMarkup';
import { areNavigationItemsExceedingHeaderMaxWidth } from './utils/areNavigationItemsExceedingHeaderMaxWidth';
/**
 * A header displays a logo, grouped navigation items
 * and an optional primary call to action.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = props => (
  <header
    className={getClassNames({
      'is-background-filled': props.isBackgroundFilled,
    })}
  >
    <HorizontalGutters as={Menu} borderless text>
      {getLogoMarkup(
        props.logoText,
        props.logoSrc,
        props.logoSizes,
        props.logoSrcSet
      )}
      {areNavigationItemsExceedingHeaderMaxWidth(
        props.navigationItems,
        props.primaryCTA
      ) ? (
        getHiddenMenuMarkup(props, true)
      ) : (
        <Fragment>
          {getHiddenMenuMarkup(props, false)}
          {getStandardMenuMarkup(props)}
        </Fragment>
      )}
    </HorizontalGutters>
  </header>
);

Component.displayName = 'Header';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  isBackgroundFilled: false,
  isSearchBarModalOpen: undefined,
  logoSizes: undefined,
  logoSrc: null,
  logoSrcSet: undefined,
  onCloseSearchBarModal: undefined,
  primaryCTA: null,
  searchBarDateRangePickerLocaleCode: undefined,
  searchBarGetIsDayBlocked: Function.prototype,
  searchBarGuestsOptions: [],
  searchBarLocationOptions: [],
  searchBarModalHeadingText: undefined,
  searchBarOnChangeInput: undefined,
  searchBarOnSubmit: undefined,
  searchBarSearchButton: undefined,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  // eslint-disable-next-line react/no-unused-prop-types
  activeNavigationItemIndex: PropTypes.number,
  /** Is the background filled with a color defined in CSS. */
  isBackgroundFilled: PropTypes.bool,
  /** Is the search bar modal open. Used when consuming `Header` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  isSearchBarModalOpen: PropTypes.bool,
  /** A list of one or more strings separated by commas indicating a set of source sizes for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSizes: PropTypes.string,
  /** The src url for the logo. */
  logoSrc: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSrcSet: PropTypes.string,
  /** The text for the logo. */
  logoText: PropTypes.string.isRequired,
  /** The items for a user to navigate the site. */
  // eslint-disable-next-line react/no-unused-prop-types
  navigationItems: PropTypes.arrayOf(
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
  /** A function called when a close event happens on the search bar modal. Used when consuming `Header` as a controlled component. */
  // eslint-disable-next-line react/no-unused-prop-types
  onCloseSearchBarModal: PropTypes.func,
  /** An optional primary call to action to display as a [`<Button />`](#button). */
  // eslint-disable-next-line react/no-unused-prop-types
  primaryCTA: PropTypes.shape({
    /** The on click handler for the call to action. */
    onClick: PropTypes.func.isRequired,
    /** The visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the search bars date range picker. */
  // eslint-disable-next-line react/no-unused-prop-types
  searchBarDateRangePickerLocaleCode: PropTypes.string,
  /**
   * A function called for each day to be displayed in the DateRangePicker.
   * Returning true blocks that day in the date range picker.
   * @param   {Moment}  day - The day to test.
   * @returns {boolean}     - Is the day blocked.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  searchBarGetIsDayBlocked: PropTypes.func,
  /** The options which the user can select in the guests field in the search bar. */
  // eslint-disable-next-line react/no-unused-prop-types
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
  ),
  /** The options which the user can select in the location field in the search bar. */
  // eslint-disable-next-line react/no-unused-prop-types
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
  ),
  /** The text displayed in the search bar modal */
  // eslint-disable-next-line react/no-unused-prop-types
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
  // eslint-disable-next-line react/no-unused-prop-types
  searchBarOnSubmit: PropTypes.func,
  /** The Search Button the Search Bar displays. */
  // eslint-disable-next-line react/no-unused-prop-types
  searchBarSearchButton: PropTypes.node,
};
