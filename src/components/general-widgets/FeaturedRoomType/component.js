import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

import { getRoomTypeDescription } from './utils/getRoomTypeDescription';

/**
 * The standard widget for featuring a room.
 * @returns {Object}
 */
export const Component = ({
  bedsNumber,
  guestsNumber,
  imageAlternativeText,
  imageUrl,
  locationName,
  nightPrice,
  ratingNumber,
  roomTypeName,
  roomTypeUrl,
}) => (
  <Card href={roomTypeUrl}>
    <Image alt={imageAlternativeText} src={imageUrl} />
    <Card.Content>
      <Card.Header>{roomTypeName}</Card.Header>
      <Card.Description>{locationName}</Card.Description>
      <Card.Description>
        {getRoomTypeDescription(guestsNumber, bedsNumber)}
      </Card.Description>
      <Card.Description>
        {ratingNumber}
        <Rating
          disabled
          maxRating={5}
          rating={Math.round(ratingNumber)}
          size="tiny"
        />
      </Card.Description>
      <Card.Description>
        from <Heading>{nightPrice}</Heading> /night
      </Card.Description>
    </Card.Content>
  </Card>
);

Component.displayName = 'FeaturedRoomType';

Component.defaultProps = {
  imageAlternativeText: '',
};

Component.propTypes = {
  /** The number of available beds in the room. */
  bedsNumber: PropTypes.number.isRequired,
  /** The number of guests the room can accommodate. */
  guestsNumber: PropTypes.number.isRequired,
  /** The alternative text for the image to display. */
  imageAlternativeText: PropTypes.string,
  /** URL pointing to the image to display. */
  imageUrl: PropTypes.string.isRequired,
  /** The name of the location of the room. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the room, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The numeral rating for the room, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
  /** The name of the room. */
  roomTypeName: PropTypes.string.isRequired,
  /** URL pointing to a page with details of the room. */
  roomTypeUrl: PropTypes.string.isRequired,
};
