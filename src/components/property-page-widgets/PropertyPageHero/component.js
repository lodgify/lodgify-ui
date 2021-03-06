import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { toUpper } from 'utils/to-upper';
import { size } from 'utils/size';
import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { FlexContainer } from 'layout/FlexContainer';
import { Gallery } from 'media/Gallery';
import { Divider } from 'elements/Divider';
import { withResponsive } from 'utils/with-responsive';
import { Hero } from 'collections/Hero';
import { VIEW_MORE_PICTURES } from 'utils/default-strings';

import { BOTTOM_OFFSET } from './constants';

/**
 * A homepage hero displays a hero with heading and a search bar on desktop screens.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  activeNavigationItemIndex,
  backgroundImageHeight,
  backgroundImageSizes,
  backgroundImageSrcSet,
  backgroundImageUrl,
  backgroundImageWidth,
  className,
  galleryImages,
  headerLogoHref,
  headerLogoSize,
  headerLogoSizes,
  headerLogoSrc,
  headerLogoSrcSet,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  headerLogoSubText,
  isHeaderBackgroundFilled,
  placeholderBackgroundImageUrl,
  secondaryButtonText,
}) => (
  <Hero
    activeNavigationItemIndex={activeNavigationItemIndex}
    backgroundImageHeight={backgroundImageHeight}
    backgroundImageSizes={backgroundImageSizes}
    backgroundImageSrcSet={backgroundImageSrcSet}
    backgroundImageUrl={backgroundImageUrl}
    backgroundImageWidth={backgroundImageWidth}
    bottomOffset={BOTTOM_OFFSET}
    className={className}
    headerLogoHref={headerLogoHref}
    headerLogoSize={headerLogoSize}
    headerLogoSizes={headerLogoSizes}
    headerLogoSrc={headerLogoSrc}
    headerLogoSrcSet={headerLogoSrcSet}
    headerLogoSubText={headerLogoSubText}
    headerLogoText={headerLogoText}
    headerNavigationItems={headerNavigationItems}
    headerPrimaryCTA={headerPrimaryCTA}
    isFixedSearchBarDisplayed
    isHeaderBackgroundFilled={isHeaderBackgroundFilled}
    placeholderBackgroundImageUrl={placeholderBackgroundImageUrl}
  >
    {size(galleryImages) > 1 ? (
      <Fragment>
        <FlexContainer alignItems="flex-end">
          <HorizontalGutters>
            <Gallery
              images={galleryImages}
              trigger={
                <Button
                  icon={ICON_NAMES.PLACEHOLDER}
                  isCompact
                  isPositionedRight
                  isSecondary
                >
                  {toUpper(secondaryButtonText)}
                </Button>
              }
            />
          </HorizontalGutters>
        </FlexContainer>
        <Divider />
      </Fragment>
    ) : null}
  </Hero>
);

Component.displayName = 'PropertyPageHero';

Component.defaultProps = {
  activeNavigationItemIndex: null,
  backgroundImageHeight: undefined,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  backgroundImageWidth: undefined,
  className: '',
  galleryImages: [],
  headerLogoHref: undefined,
  headerLogoSize: undefined,
  headerLogoSizes: undefined,
  headerLogoSrc: null,
  headerLogoSrcSet: undefined,
  headerLogoSubText: undefined,
  headerPrimaryCTA: null,
  isHeaderBackgroundFilled: false,
  placeholderBackgroundImageUrl: null,
  secondaryButtonText: VIEW_MORE_PICTURES,
};

Component.propTypes = {
  /** The index of the active navigation item. */
  activeNavigationItemIndex: PropTypes.number,
  /** The natural height of the background image. */
  backgroundImageHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSrcSet: PropTypes.string,
  /** The source url of the hero's background image. */
  backgroundImageUrl: PropTypes.string.isRequired,
  /** The natural width of the background image. */
  backgroundImageWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** The custom classes. */
  className: PropTypes.string,
  /** The images to display in the gallery modal. */
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      /** A description of the image to show above the slideshow when the image is showing. */
      descriptionText: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      sizes: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      srcSet: PropTypes.string,
      /** Title of the image to show when hovering over it on desktop browsers. */
      title: PropTypes.string,
      /** URL pointing to the image to display. */
      url: PropTypes.string.isRequired,
    })
  ),
  /** The href for the header logo link. */
  headerLogoHref: PropTypes.string,
  /** The maximum size of the logo in the header. */
  headerLogoSize: PropTypes.oneOf(['medium', 'large', 'huge']),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the header logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  headerLogoSizes: PropTypes.string,
  /** The src url for the logo in the header. */
  headerLogoSrc: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the header logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  headerLogoSrcSet: PropTypes.string,
  /** The sub text that appears under the logo or logo text in the header. */
  headerLogoSubText: PropTypes.string,
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
          target: PropTypes.string,
          text: PropTypes.string.isRequired,
        })
      ),
      /** Specifies where to display the linked header navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: PropTypes.string,
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
  /** The background of the header is a solid color. */
  isHeaderBackgroundFilled: PropTypes.bool,
  /** The background placeholder image url of the hero. */
  placeholderBackgroundImageUrl: PropTypes.string,
  /** The text to display on the secondary button at the bottom of the hero. */
  secondaryButtonText: PropTypes.string,
};

export const ComponentWithResponsive = withResponsive(Component);
