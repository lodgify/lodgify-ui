import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import { getNightPriceMarkup } from 'utils/get-night-price-markup/';

import { getRoomTypeDescription } from './utils/getRoomTypeDescription';

/**
 * The standard widget for featuring a room.
 * @returns {Object}
 */

export const Component = ({
  bedsLabel,
  bedsNumber,
  guestsLabel,
  guestsNumber,
  imageAlternativeText,
  imageUrl,
  locationName,
  nightPrice,
  roomTypeName,
  roomTypeUrl,
}) => (
  <Card className="has-featured" href={roomTypeUrl}>
    <Image alt={imageAlternativeText} src={imageUrl} />
    <Card.Content>
      <Card.Header>{roomTypeName}</Card.Header>
      <Card.Description>{locationName}</Card.Description>
      <Card.Description>
        {getRoomTypeDescription(
          guestsLabel,
          guestsNumber,
          bedsLabel,
          bedsNumber
        )}
      </Card.Description>
      <Card.Description>{getNightPriceMarkup(nightPrice)}</Card.Description>
    </Card.Content>
  </Card>
);

Component.displayName = 'FeaturedRoomType';

Component.defaultProps = {
  imageAlternativeText: '',
  bedsLabel: 'Beds',
  guestsLabel: 'Guests',
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
  /** URL pointing to the image to display. */
  imageUrl: PropTypes.string.isRequired,
  /** The name of the location of the room. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the room, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The name of the room. */
  roomTypeName: PropTypes.string.isRequired,
  /** URL pointing to a page with details of the room. */
  roomTypeUrl: PropTypes.string.isRequired,
};
