import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { PER_NIGHT, FROM_PRICE_PER_PERIOD } from 'utils/default-strings';
import { getCardPlaceholderMarkup } from 'utils/get-card-placeholder-markup';
import { getPricePerPeriodMarkup } from 'utils/get-price-per-period-markup';
import { Rating } from 'elements/Rating';
import { ResponsiveImage } from 'media/ResponsiveImage';
import { Subheading } from 'typography/Subheading';
import { Heading } from 'typography/Heading';

import { getPropertyDescription } from './utils/getPropertyDescription';

/**
 * The standard widget for featuring a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  bedroomsNumber,
  guestsNumber,
  imageSizes,
  imageSrcSet,
  imageUrl,
  isShowingPlaceholder,
  locationName,
  periodText,
  pricePerPeriodPrefix,
  pricePerPeriod,
  placeholderImageUrl,
  propertyName,
  propertyType,
  propertyUrl,
  ratingNumber,
  propertyUrlTarget,
}) => (
  <Card className="has-featured" href={propertyUrl} target={propertyUrlTarget}>
    {isShowingPlaceholder ? (
      getCardPlaceholderMarkup()
    ) : (
      <Fragment>
        <ResponsiveImage
          imageUrl={imageUrl}
          isFluid
          placeholderImageUrl={placeholderImageUrl}
          sizes={imageSizes}
          srcSet={imageSrcSet}
        />
        <Card.Content>
          <Card.Meta>
            <Subheading>{propertyType}</Subheading>
          </Card.Meta>
          <Card.Header>
            <Heading>{propertyName}</Heading>
          </Card.Header>
          <Card.Description>{locationName}</Card.Description>
          <Card.Description>
            {getPropertyDescription(guestsNumber, bedroomsNumber)}
          </Card.Description>
          <Card.Description>
            {!!ratingNumber && (
              <Rating iconSize="tiny" ratingNumber={ratingNumber} />
            )}
          </Card.Description>
          <Card.Description>
            {getPricePerPeriodMarkup(
              pricePerPeriod,
              pricePerPeriodPrefix,
              periodText
            )}
          </Card.Description>
        </Card.Content>
      </Fragment>
    )}
  </Card>
);

Component.displayName = 'FeaturedProperty';

Component.defaultProps = {
  bedroomsNumber: null,
  imageSizes: undefined,
  imageSrcSet: undefined,
  isShowingPlaceholder: false,
  periodText: PER_NIGHT,
  pricePerPeriodPrefix: FROM_PRICE_PER_PERIOD,
  placeholderImageUrl: undefined,
  propertyUrlTarget: '_self',
  ratingNumber: null,
};

Component.propTypes = {
  /** The number of available bedrooms at the property. */
  bedroomsNumber: PropTypes.number,
  /** The number of guests the property can accommodate. */
  guestsNumber: PropTypes.number.isRequired,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSrcSet: PropTypes.string,
  /** URL pointing to the image to display. */
  imageUrl: PropTypes.string.isRequired,
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The text describing the pricing period. */
  periodText: PropTypes.string,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** The price per period of the property, with currency symbol. */
  pricePerPeriod: PropTypes.string.isRequired,
  /** The text prefix to display along with the price per period. */
  pricePerPeriodPrefix: PropTypes.string,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The name of the type of the property. */
  propertyType: PropTypes.string.isRequired,
  /** URL pointing to a page with details of the property. */
  propertyUrl: PropTypes.string.isRequired,
  /** Specifies where to display the linked featured property URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
  propertyUrlTarget: PropTypes.string,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number,
};
