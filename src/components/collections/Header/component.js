import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import getClassNames from 'classnames';
import { Menu } from 'semantic-ui-react';

import { HorizontalGutters } from 'layout/HorizontalGutters';

import { getNavigationItemsWidth } from './utils/getNavigationItemsWidth';
import { getMenuWidth } from './utils/getMenuWidth';
import { getLogoMarkup } from './utils/getLogoMarkup';
import { getIsMenuHidden } from './utils/getIsMenuHidden';
import { getHiddenMenuMarkup } from './utils/getHiddenMenuMarkup';
import { getStandardMenuMarkup } from './utils/getStandardMenuMarkup';

/**
 * A header displays a logo, grouped navigation items
 * and an optional primary call to action.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isMenuHidden: false,
    isTransparent: true,
    navigationItemsWidth: null,
    windowInnerWidth: null,
  };

  componentDidMount = () => {
    global.window.addEventListener('resize', debounce(this.handleResize, 150));
    this.handleResize();
    this.setState({
      navigationItemsWidth: getNavigationItemsWidth(this.header),
      isTransparent: false,
    });
  };

  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.windowInnerWidth !== this.state.windowInnerWidth) {
      const menuWidth = getMenuWidth(this.header);

      this.setState({
        isMenuHidden: getIsMenuHidden(
          menuWidth,
          this.state.navigationItemsWidth
        ),
      });
    }
  };

  createHeaderRef = header => (this.header = header);

  handleResize = event => {
    this.setState({ windowInnerWidth: event && event.target.innerWidth });
  };

  render = () => {
    const {
      isBackgroundFilled,
      logoText,
      logoSrc,
      logoSizes,
      logoSrcSet,
    } = this.props;
    const { isMenuHidden, isTransparent } = this.state;

    return (
      <header
        className={getClassNames({
          'is-background-filled': isBackgroundFilled,
          'is-transparent': isTransparent,
        })}
        ref={this.createHeaderRef}
      >
        <HorizontalGutters as={Menu} borderless text>
          {getLogoMarkup(logoText, logoSrc, logoSizes, logoSrcSet)}
          {isMenuHidden
            ? getHiddenMenuMarkup(this.props, true)
            : getStandardMenuMarkup(this.props)}
        </HorizontalGutters>
      </header>
    );
  };
}

Component.displayName = 'Header';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  isBackgroundFilled: false,
  logoSizes: undefined,
  logoSrc: null,
  logoSrcSet: undefined,
  primaryCTA: null,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  // eslint-disable-next-line react/no-unused-prop-types
  activeNavigationItemIndex: PropTypes.number,
  /** Is the background filled with a color defined in CSS. */
  isBackgroundFilled: PropTypes.bool,
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
  /** An optional primary call to action to display as a [`<Button />`](#button). */
  // eslint-disable-next-line react/no-unused-prop-types
  primaryCTA: PropTypes.shape({
    /** The on click handler for the call to action. */
    onClick: PropTypes.func.isRequired,
    /** The visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
};
