import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { withResponsive } from 'utils/with-responsive';
import { Container } from 'layout/Container';

import { getLogoMarkup } from './utils/getLogoMarkup';
import { getMobileMenuMarkup } from './utils/getMobileMenuMarkup';
import { getDesktopMenuMarkup } from './utils/getDesktopMenuMarkup';

/**
 * A header displays a logo, grouped navigation items
 * and an optional primary call to action.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = props => (
  <header>
    <Container as={Menu} borderless text>
      {getLogoMarkup(props.logoSrc, props.logoText)}
      <Menu.Menu position="right">
        {props.isUserOnMobile
          ? getMobileMenuMarkup(props)
          : getDesktopMenuMarkup(props)}
      </Menu.Menu>
    </Container>
  </header>
);

Component.displayName = 'Header';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  logoSrc: null,
  primaryCTA: null,
  searchBarGuestsOptions: [],
  searchBarLocationOptions: [],
};

Component.propTypes = {
  /** The index of the active navigation item. */
  // eslint-disable-next-line react/no-unused-prop-types
  activeNavigationItemIndex: PropTypes.number,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
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
    /** The href url for the call to action. */
    href: PropTypes.string.isRequired,
    /** The  visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
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
};

export const ComponentWithResponsive = withResponsive(Component);
