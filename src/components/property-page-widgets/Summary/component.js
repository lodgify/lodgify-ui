import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

import { getNightPriceAndRatingMarkup } from './utils/getNightPriceAndRatingMarkup';
import { getNightPriceRatingAndLocationMarkup } from './utils/getNightPriceRatingAndLocationMarkup';

/**
 * The standard widget for displaying the summary details of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  areOnlyNightPriceAndRatingDisplayed,
  locationName,
  nightPrice,
  propertyName,
  ratingNumber,
}) => (
  <Segment.Group className="is-summary" compact>
    {!areOnlyNightPriceAndRatingDisplayed && (
      <Segment>
        <Heading>{propertyName}</Heading>
      </Segment>
    )}
    <Segment.Group
      className="horizontal-wrap"
      horizontal={!areOnlyNightPriceAndRatingDisplayed}
    >
      {areOnlyNightPriceAndRatingDisplayed
        ? getNightPriceAndRatingMarkup(ratingNumber, nightPrice)
        : getNightPriceRatingAndLocationMarkup(
            ratingNumber,
            nightPrice,
            locationName
          )}
    </Segment.Group>
  </Segment.Group>
);

Component.displayName = 'Summary';

Component.defaultProps = {
  areOnlyNightPriceAndRatingDisplayed: false,
};

Component.propTypes = {
  /** Are the rating and the price only displayed */
  areOnlyNightPriceAndRatingDisplayed: PropTypes.bool,
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The price per night of the property, with currency symbol. */
  nightPrice: PropTypes.string.isRequired,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number.isRequired,
};
