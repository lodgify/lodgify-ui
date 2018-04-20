import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

/**
 * The standard widget for featuring a property.
 * @returns {Object}
 */
export const Component = ({
  bedroomsNumber,
  guestsNumber,
  imageAlternativeText,
  imageUrl,
  locationName,
  nightPrice,
  propertyName,
  propertyType,
  propertyUrl,
  ratingNumber,
}) => (
  <Card href={propertyUrl}>
    <Image alt={imageAlternativeText} src={imageUrl} />
    <Card.Content>
      <Card.Meta>{propertyType}</Card.Meta>
      <Card.Header>{propertyName}</Card.Header>
      <Card.Description>{locationName}</Card.Description>
      <Card.Description>
        Guests: {guestsNumber} | Bedrooms: {bedroomsNumber}
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

Component.displayName = 'FeaturedProperty';

Component.defaultProps = {
  imageAlternativeText: '',
};

Component.propTypes = {
  /** The number of available bedrooms at the property. */
  bedroomsNumber: PropTypes.number.isRequired,
  /** The alternative text for the image to display. */
  imageAlternativeText: PropTypes.string,
  /** URL pointing to the image to display. */
  imageUrl: PropTypes.string.isRequired,
  /** The number of guests the property can accommodate. */
  guestsNumber: PropTypes.number.isRequired,
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the property, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The name of the type of the property. */
  propertyType: PropTypes.string.isRequired,
  /** URL pointing to a page with details of the property . */
  propertyUrl: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
};
