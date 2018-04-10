import React from 'react';
import PropTypes from 'prop-types';
import { Rating, Segment, Icon } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

/**
 * The standard widget for displaying the summary details of a property.
 * @returns {Object}
 */
export const Component = ({
  locationName,
  nightPrice,
  propertyName,
  ratingNumber,
}) => (
  <Segment.Group compact>
    <Segment>
      <Heading size="tiny">{propertyName}</Heading>
    </Segment>
    <Segment.Group horizontal>
      <Segment>
        {locationName}
        <Icon color="yellow" name="map pin" />
      </Segment>
      <Segment>
        {ratingNumber}
        <Rating
          disabled
          maxRating={5}
          rating={Math.round(ratingNumber)}
          size="mini"
        />
      </Segment>
      <Segment>
        from <Heading size="tiny">{nightPrice}</Heading> /night
      </Segment>
    </Segment.Group>
  </Segment.Group>
);

Component.displayName = 'PropertySummary';

Component.propTypes = {
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the property, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
};
