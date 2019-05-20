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
import { getStandardMenuMarkup } from './utils/getStandardMenuMarkup';
import { HiddenMenu } from './utils/HiddenMenu';

/**
 * A header displays a logo, grouped navigation items
 * and an optional primary call to action.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    activeNavigationItemIndex: null,
    isMenuHidden: false,
    isOpaque: false,
    navigationItemsWidth: null,
    windowInnerWidth: null,
  };

  componentDidMount = () => {
    global.window.addEventListener('resize', debounce(this.handleResize, 150));
    this.handleResize();
    this.setState({
      activeNavigationItemIndex: this.props.activeNavigationItemIndex,
      navigationItemsWidth: getNavigationItemsWidth(this.header),
      isOpaque: true,
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
      logoHref,
      logoSizes,
      logoSrc,
      logoSrcSet,
      logoSubText,
      logoText,
    } = this.props;
    const { activeNavigationItemIndex, isMenuHidden, isOpaque } = this.state;

    return (
      <header
        className={getClassNames({
          'is-background-filled': isBackgroundFilled,
          'is-opaque': isOpaque,
        })}
        ref={this.createHeaderRef}
      >
        <HorizontalGutters as={Menu} borderless text>
          {getLogoMarkup(
            logoHref,
            logoSubText,
            logoText,
            logoSrc,
            logoSizes,
            logoSrcSet
          )}
          <Menu.Menu position="right">
            {isMenuHidden ? (
              <HiddenMenu
                {...this.props}
                activeNavigationItemIndex={activeNavigationItemIndex}
              />
            ) : (
              getStandardMenuMarkup(this.props, activeNavigationItemIndex)
            )}
          </Menu.Menu>
        </HorizontalGutters>
      </header>
    );
  };
}

Component.displayName = 'Header';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  isBackgroundFilled: false,
  logoHref: '/',
  logoSizes: undefined,
  logoSrc: null,
  logoSrcSet: undefined,
  logoSubText: null,
  primaryCTA: null,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: PropTypes.number,
  /** Is the background filled with a color defined in CSS. */
  isBackgroundFilled: PropTypes.bool,
  /** The href for the logo link. */
  logoHref: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSizes: PropTypes.string,
  /** The src url for the logo. */
  logoSrc: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSrcSet: PropTypes.string,
  /** The text that appears under the logo or logo text. */
  logoSubText: PropTypes.string,
  /** The text for the logo. */
  logoText: PropTypes.string.isRequired,
  /** The items for a user to navigate the site. */
  navigationItems: PropTypes.arrayOf(
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
      /** Specifies where to display the linked navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: PropTypes.string,
      /** The visible text for an item. */
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** An optional primary call to action to display as a [`<Button />`](#button). */
  primaryCTA: PropTypes.shape({
    /** The on click handler for the call to action. */
    onClick: PropTypes.func.isRequired,
    /** The visible text for the call to action. */
    text: PropTypes.string.isRequired,
  }),
};
