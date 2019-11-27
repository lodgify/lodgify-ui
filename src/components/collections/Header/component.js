import React, { PureComponent } from 'react';
import { arrayOf, bool, func, number, oneOf, shape, string } from 'prop-types';
import { debounce } from 'debounce';
import classnames from 'classnames';
import { Menu } from 'semantic-ui-react';

import { HorizontalGutters } from 'layout/HorizontalGutters';

import { getNavigationItemsWidth } from './utils/getNavigationItemsWidth';
import { getMenuWidth } from './utils/getMenuWidth';
import { getIsMenuHidden } from './utils/getIsMenuHidden';
import { getStandardMenuMarkup } from './utils/getStandardMenuMarkup';
import { HiddenMenu } from './components/HiddenMenu';
import { getLogoWidth } from './utils/getLogoWidth';
import { MEDIUM_LOGO_SIZE } from './constants';
import { HeaderLogo } from './components/HeaderLogo';

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
      const logoWidth = getLogoWidth(this.header);

      this.setState({
        isMenuHidden: getIsMenuHidden(
          menuWidth,
          this.state.navigationItemsWidth,
          logoWidth
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
      className,
      isBackgroundFilled,
      logoHref,
      logoSizes,
      logoSize,
      logoSrc,
      logoSrcSet,
      logoSubText,
      logoText,
    } = this.props;
    const { activeNavigationItemIndex, isMenuHidden, isOpaque } = this.state;

    return (
      <header
        className={classnames(className, {
          'is-background-filled': isBackgroundFilled,
          'is-opaque': isOpaque,
        })}
        ref={this.createHeaderRef}
      >
        <HorizontalGutters as={Menu} borderless text>
          <HeaderLogo
            logoHref={logoHref}
            logoSize={logoSize}
            logoSizes={logoSizes}
            logoSrc={logoSrc}
            logoSrcSet={logoSrcSet}
            logoSubText={logoSubText}
            logoText={logoText}
          />
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
  className: '',
  isBackgroundFilled: false,
  logoHref: '/',
  logoSize: MEDIUM_LOGO_SIZE,
  logoSizes: undefined,
  logoSrc: null,
  logoSrcSet: undefined,
  logoSubText: null,
  primaryCTA: null,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: number,
  /** The custom classes. */
  className: string,
  /** Is the background filled with a color defined in CSS. */
  isBackgroundFilled: bool,
  /** The href for the logo link. */
  logoHref: string,
  /** The maximum size of the headers logo. */
  logoSize: oneOf(['medium', 'large', 'huge']),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSizes: string,
  /** The src url for the logo. */
  logoSrc: string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  logoSrcSet: string,
  /** The text that appears under the logo or logo text. */
  logoSubText: string,
  /** The text for the logo. */
  logoText: string.isRequired,
  /** The items for a user to navigate the site. */
  navigationItems: arrayOf(
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
  /** An optional primary call to action to display as a [`<Button />`](#button). */
  primaryCTA: shape({
    /** The on click handler for the call to action. */
    onClick: func.isRequired,
    /** The visible text for the call to action. */
    text: string.isRequired,
  }),
};
