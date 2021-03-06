import React, { Fragment } from 'react';
import {
  string,
  bool,
  shape,
  number,
  oneOfType,
  arrayOf,
  oneOf,
  func,
} from 'prop-types';

import { FullBleed } from 'media/FullBleed';
import { ContactHeader } from 'collections/ContactHeader';
import { FlexContainer } from 'layout/FlexContainer';
import { toUpper } from 'utils/to-upper';
import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Gallery } from 'media/Gallery';
import { Divider } from 'elements/Divider';
import { size } from 'utils/size';
import { VIEW_MORE_PICTURES } from 'utils/default-strings';

import { BOTTOM_OFFSET } from './constants';

/**
 * A hero displays a contact header with a gallery.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  backgroundImageHeight,
  backgroundImageSizes,
  backgroundImageSrcSet,
  backgroundImageUrl,
  backgroundImageWidth,
  bottomOffset,
  className,
  currencyNoResultsText,
  currencyOptions,
  currencyValue,
  galleryImages,
  headerLogoHref,
  headerLogoSize,
  headerLogoSizes,
  headerLogoSrc,
  headerLogoSrcSet,
  headerLogoSubText,
  headerLogoText,
  headerNavigationItems,
  headerPrimaryCTA,
  languageOptions,
  languageValue,
  onChangeCurrency,
  phoneNumber,
  placeholderBackgroundImageUrl,
  secondaryButtonText,
  onChangeLanguage,
}) => {
  return (
    <FullBleed
      bottomOffset={bottomOffset}
      className={className}
      hasGradient
      imageHeight={backgroundImageHeight}
      imageUrl={backgroundImageUrl}
      imageWidth={backgroundImageWidth}
      placeholderImageUrl={placeholderBackgroundImageUrl}
      sizes={backgroundImageSizes}
      srcSet={backgroundImageSrcSet}
    >
      <ContactHeader
        className={className}
        currencyNoResultsText={currencyNoResultsText}
        currencyOptions={currencyOptions}
        currencyValue={currencyValue}
        isBackgroundFilled
        languageOptions={languageOptions}
        languageValue={languageValue}
        logoHref={headerLogoHref}
        logoSize={headerLogoSize}
        logoSizes={headerLogoSizes}
        logoSrc={headerLogoSrc}
        logoSrcSet={headerLogoSrcSet}
        logoSubText={headerLogoSubText}
        logoText={headerLogoText}
        navigationMenuItems={headerNavigationItems}
        onChangeCurrency={onChangeCurrency}
        onChangeLanguage={onChangeLanguage}
        phoneNumber={phoneNumber}
        primaryCTA={headerPrimaryCTA}
      />
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
    </FullBleed>
  );
};

Component.displayName = 'ContactPropertyHero';

Component.defaultProps = {
  backgroundImageHeight: undefined,
  backgroundImageSizes: undefined,
  backgroundImageSrcSet: undefined,
  backgroundImageWidth: undefined,
  bottomOffset: BOTTOM_OFFSET,
  className: null,
  currencyNoResultsText: undefined,
  currencyOptions: [],
  currencyValue: null,
  galleryImages: [],
  headerLogoHref: undefined,
  headerLogoSize: undefined,
  headerLogoSizes: undefined,
  headerLogoSrc: null,
  headerLogoSrcSet: undefined,
  headerLogoSubText: undefined,
  headerPrimaryCTA: null,
  languageOptions: [],
  languageValue: null,
  onChangeCurrency: undefined,
  onChangeLanguage: undefined,
  phoneNumber: '',
  placeholderBackgroundImageUrl: null,
  secondaryButtonText: VIEW_MORE_PICTURES,
};

Component.propTypes = {
  /** The natural height of the background image. */
  backgroundImageHeight: oneOfType([string, number]),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSizes: string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the background image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  backgroundImageSrcSet: string,
  /** The source url of the hero's background image. */
  backgroundImageUrl: string.isRequired,
  /** The natural width of the background image. */
  backgroundImageWidth: oneOfType([string, number]),
  /** Reduce the height of the Hero with an offset, supports CSS dimensions. */
  bottomOffset: string,
  /** The custom classes. */
  className: string,
  /** The text to display when no results are returned from the currency dropdown. */
  currencyNoResultsText: string,
  /** The options which the user can select for the currency dropdown. */
  currencyOptions: arrayOf(
    shape({
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The current value of the currency dropdown. */
  currencyValue: oneOfType([bool, number, string]),
  /** The images to display in the gallery modal. */
  galleryImages: arrayOf(
    shape({
      /** A description of the image to show above the slideshow when the image is showing. */
      descriptionText: string,
      /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      sizes: string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      srcSet: string,
      /** Title of the image to show when hovering over it on desktop browsers. */
      title: string,
      /** URL pointing to the image to display. */
      url: string.isRequired,
    })
  ),
  /** The href for the header logo link. */
  headerLogoHref: string,
  /** The maximum size of the logo in the header. */
  headerLogoSize: oneOf(['medium', 'large', 'huge']),
  /** A list of one or more strings separated by commas indicating a set of source sizes for the header logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  headerLogoSizes: string,
  /** The src url for the logo in the header. */
  headerLogoSrc: string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the header logo. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  headerLogoSrcSet: string,
  /** The sub text that appears under the logo or logo text in the header. */
  headerLogoSubText: string,
  /** The text for the logo in the header. */
  headerLogoText: string.isRequired,
  /** The items for a user to navigate the site. */
  headerNavigationItems: arrayOf(
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
      /** Specifies where to display the linked header navigation items URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
      target: string,
      /** The visible text for an item. */
      text: string.isRequired,
    })
  ).isRequired,
  /** An optional primary call to action to display as a [`<Button />`](#button) in the header. */
  headerPrimaryCTA: shape({
    /** The on click handler for the call to action. */
    onClick: func.isRequired,
    /** The  visible text for the call to action. */
    text: string.isRequired,
  }),
  /** The options which the user can select for the language dropdown. */
  languageOptions: arrayOf(
    shape({
      /** The visible text for the option. */
      text: string.isRequired,
      /** The underlying value for the option. */
      value: oneOfType([bool, number, string]),
    })
  ),
  /** The current value of the language dropdown. */
  languageValue: oneOfType([bool, number, string]),
  /** The function called when the currency dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeCurrency: func,
  /** The function called when the language dropdown is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeLanguage: func,
  /** The phone number to display. */
  phoneNumber: string,
  /** The ISO 639-1 locale code which changes the format and language of days of the week and the months of the year in the search bars date range picker. */
  placeholderBackgroundImageUrl: string,
  /** The text to display on the secondary button at the bottom of the hero. */
  secondaryButtonText: string,
};
