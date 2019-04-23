import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { PER_NIGHT, BEDS, GUESTS } from 'utils/default-strings';
import { getCardPlaceholderMarkup } from 'utils/get-card-placeholder-markup';
import { getPricePerPeriodMarkup } from 'utils/get-price-per-period-markup';
import { ResponsiveImage } from 'media/ResponsiveImage';
import { Heading } from 'typography/Heading';

import { getRoomTypeDescription } from './utils/getRoomTypeDescription';

/**
 * The standard widget for featuring a room.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  bedsLabel,
  bedsNumber,
  guestsLabel,
  guestsNumber,
  imageAlternativeText,
  imageSizes,
  imageSrcSet,
  imageUrl,
  isShowingPlaceholder,
  locationName,
  periodText,
  pricePerPeriod,
  placeholderImageUrl,
  roomTypeName,
  roomTypeUrl,
  roomTypeUrlTarget,
}) => (
  <Card className="has-featured" href={roomTypeUrl} target={roomTypeUrlTarget}>
    {isShowingPlaceholder ? (
      getCardPlaceholderMarkup()
    ) : (
      <Fragment>
        <ResponsiveImage
          alternativeText={imageAlternativeText}
          imageUrl={imageUrl}
          isFluid
          placeholderImageUrl={placeholderImageUrl}
          sizes={imageSizes}
          srcSet={imageSrcSet}
        />
        <Card.Content>
          <Card.Header>
            <Heading>{roomTypeName}</Heading>
          </Card.Header>
          <Card.Description>{locationName}</Card.Description>
          <Card.Description>
            {getRoomTypeDescription(
              guestsLabel,
              guestsNumber,
              bedsLabel,
              bedsNumber
            )}
          </Card.Description>
          <Card.Description>
            {getPricePerPeriodMarkup(pricePerPeriod, periodText)}
          </Card.Description>
        </Card.Content>
      </Fragment>
    )}
  </Card>
);

Component.displayName = 'FeaturedRoomType';

Component.defaultProps = {
  bedsLabel: BEDS,
  guestsLabel: GUESTS,
  imageAlternativeText: undefined,
  imageSizes: undefined,
  imageSrcSet: undefined,
  periodText: PER_NIGHT,
  placeholderImageUrl: undefined,
  isShowingPlaceholder: false,
  roomTypeUrlTarget: '_self',
};

Component.propTypes = {
  /** The label displayed next to the number of beds. */
  bedsLabel: PropTypes.string,
  /** The number of available beds in the room. */
  bedsNumber: PropTypes.number.isRequired,
  /** The label displayed next to the number of guests. */
  guestsLabel: PropTypes.string,
  /** The number of guests the room can accommodate. */
  guestsNumber: PropTypes.number.isRequired,
  /** The alternative text for the image to display. */
  imageAlternativeText: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSrcSet: PropTypes.string,
  /** URL pointing to the image to display. */
  imageUrl: PropTypes.string.isRequired,
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /** The name of the location of the room. */
  locationName: PropTypes.string.isRequired,
  /** The text describing the pricing period. */
  periodText: PropTypes.string,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** The price per period of the room, with currency symbol. */
  pricePerPeriod: PropTypes.string.isRequired,
  /** The name of the room. */
  roomTypeName: PropTypes.string.isRequired,
  /** URL pointing to a page with details of the room. */
  roomTypeUrl: PropTypes.string.isRequired,
  /** Specifies where to display the linked featured room type URL. See [MDN docs `<a />` for more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target). */
  roomTypeUrlTarget: PropTypes.string,
};
