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
  backgroundImageHeight,
  backgroundImageSizes,
  backgroundImageSrcSet,
  backgroundImageUrl,
  backgroundImageWidth,
  bottomOffset,
  children,
  headerLogoHref,
  headerLogoSizes,
  headerLogoSrc,
  headerLogoSrcSet,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  placeholderBackgroundImageUrl,
}) => (
  <FullBleed
    bottomOffset={bottomOffset}
    hasGradient
    imageHeight={backgroundImageHeight}
    imageUrl={backgroundImageUrl}
    imageWidth={backgroundImageWidth}
    placeholderImageUrl={placeholderBackgroundImageUrl}
    sizes={backgroundImageSizes}
    srcSet={backgroundImageSrcSet}
  >
    <Header
      activeNavigationItemIndex={activeNavigationItemIndex}
      logoHref={headerLogoHref}
      logoSizes={headerLogoSizes}
      logoSrc={headerLogoSrc}
      logoSrcSet={headerLogoSrcSet}
      logoText={headerLogoText}
      navigationItems={headerNavigationItems}
      primaryCTA={headerPrimaryCTA}
    />
    {children}
  </FullBleed>
);

Component.displayName = 'Hero';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  backgroundImageHeight: undefined,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  backgroundImageWidth: undefined,
  bottomOffset: DEFAULT_BOTTOM_OFFSET,
  children: null,
  headerLogoHref: undefined,
  headerLogoSizes: undefined,
  headerLogoSrc: null,
  headerLogoSrcSet: undefined,
  headerPrimaryCTA: null,
  placeholderBackgroundImageUrl: null,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: PropTypes.number,
  /** The natural height of the background image. */
  backgroundImageHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSrcSet: PropTypes.string,
  /** The source url of the hero's background image. */
  backgroundImageUrl: PropTypes.string.isRequired,
  /** The natural width of the background image. */
  backgroundImageWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Reduce the height of the Hero with an offset, supports CSS dimensions. */
  bottomOffset: PropTypes.string,
  /** The children displayed between the header and the bottom of the hero. */
  children: PropTypes.node,
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
  /** The background placeholder image url of the hero. */
  placeholderBackgroundImageUrl: PropTypes.string,
};
