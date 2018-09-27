import React from 'react';
import PropTypes from 'prop-types';
import { upperCase } from 'lodash';

import { withResponsive } from 'utils/with-responsive';
import { Hero } from 'collections/Hero';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { FlexContainer } from 'layout/FlexContainer';
import { Gallery } from 'media/Gallery';
import { getGalleryHeadingMarkup } from 'utils/get-gallery-heading-markup';
import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';
import { VIEW_MORE_PICTURES } from 'utils/default-strings';
import { Divider } from 'elements/Divider';

/**
 * A homepage hero displays a hero with heading and a search bar on desktop screens.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({
  headerLogoSrc,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  images,
  propertyName,
  ratingNumber,
  searchBarGuestsOptions,
  searchBarLocationOptions,
  secondaryButtonText,
}) => (
  <Hero
    backgroundImageUrl={images[0].imageUrl}
    headerLogoSrc={headerLogoSrc}
    headerLogoText={headerLogoText}
    headerNavigationItems={headerNavigationItems}
    headerPrimaryCTA={headerPrimaryCTA}
    headerSearchBarGuestsOptions={searchBarGuestsOptions}
    headerSearchBarLocationOptions={searchBarLocationOptions}
  >
    <FlexContainer alignItems="flex-end">
      <HorizontalGutters>
        <Gallery
          heading={getGalleryHeadingMarkup(propertyName, ratingNumber)}
          images={images}
          trigger={
            <Button
              icon={ICON_NAMES.PLACEHOLDER}
              isCompact
              isPositionedRight
              isSecondary
            >
              {upperCase(secondaryButtonText)}
            </Button>
          }
        />
      </HorizontalGutters>
    </FlexContainer>
    <Divider />
  </Hero>
);

Component.displayName = 'PropertyPageHero';

Component.defaultProps = {
  headerLogoSrc: null,
  headerPrimaryCTA: null,
  propertyName: null,
  ratingNumber: null,
  secondaryButtonText: VIEW_MORE_PICTURES,
};

Component.propTypes = {
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
  /** The images to display in the gallery modal. */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /** Alternative text to show if the image can't be loaded by the browser */
      alternativeText: PropTypes.string,
      /** The label text for the when the image is not found. */
      imageNotFoundLabelText: PropTypes.string,
      /** Title of the image to show when hovering it on desktop browsers */
      imageTitle: PropTypes.string,
      /** URL pointing to the image to display. */
      imageUrl: PropTypes.string.isRequired,
      /** A visible label for the image. */
      label: PropTypes.string.isRequired,
      /** Collection of objects to specify different image sources
       *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
       */
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          media: PropTypes.string.isRequired,
          srcset: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  /** The name of the property to display in the gallery modal. */
  propertyName: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number,
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
  /** The text to display on the secondary button at the bottom of the hero. */
  secondaryButtonText: PropTypes.string,
};

export const ComponentWithResponsive = withResponsive(Component);
