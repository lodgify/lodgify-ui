import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Menu } from 'semantic-ui-react';

import { HorizontalGutters } from 'layout/HorizontalGutters';

import { getLogoMarkup } from './utils/getLogoMarkup';
import { getMobileMenuMarkup } from './utils/getMobileMenuMarkup';
import { getDesktopMenuMarkup } from './utils/getDesktopMenuMarkup';

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
      {getLogoMarkup(props.logoSrc, props.logoText)}
      {getMobileMenuMarkup(props)}
      {getDesktopMenuMarkup(props)}
    </HorizontalGutters>
  </header>
);

Component.displayName = 'Header';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  isBackgroundFilled: false,
  logoSrc: null,
  primaryCTA: null,
  searchBarGetIsDayBlocked: Function.prototype,
  searchBarGuestsOptions: [],
  searchBarLocationOptions: [],
  searchBarModalHeadingText: undefined,
  searchBarOnSubmit: undefined,
  searchBarSearchButton: undefined,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  // eslint-disable-next-line react/no-unused-prop-types
  activeNavigationItemIndex: PropTypes.number,
  /** Is the background filled with a color defined in CSS. */
  isBackgroundFilled: PropTypes.bool,
  /** The src url for the logo. */
  logoSrc: PropTypes.string,
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
  /** An optional primary call to action to display as a [`<Button />`](#button). */
  // eslint-disable-next-line react/no-unused-prop-types
  primaryCTA: PropTypes.shape({
    /** The on click handler for the call to action. */
    onClick: PropTypes.func.isRequired,
    /** The visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
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
