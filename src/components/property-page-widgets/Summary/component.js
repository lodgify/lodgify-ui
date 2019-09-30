import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { PER_NIGHT, FROM_PRICE_PER_PERIOD } from 'utils/default-strings';
import { Heading } from 'typography/Heading';

import { getPricePerPeriodAndRatingMarkup } from './utils/getPricePerPeriodAndRatingMarkup';
import { getPricePerPeriodAndLocationMarkup } from './utils/getPricePerPeriodAndLocationMarkup';

/**
 * The standard widget for displaying the summary details of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  areOnlyNightPriceAndRatingDisplayed,
  isShowingPlaceholder,
  locationName,
  periodText,
  pricePerPeriod,
  pricePerPeriodPrefix,
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
        ? getPricePerPeriodAndRatingMarkup(
            isShowingPlaceholder,
            periodText,
            pricePerPeriod,
            pricePerPeriodPrefix,
            ratingNumber
          )
        : getPricePerPeriodAndLocationMarkup(
            isShowingPlaceholder,
            locationName,
            periodText,
            pricePerPeriod,
            pricePerPeriodPrefix,
            ratingNumber
          )}
    </Segment.Group>
  </Segment.Group>
);

Component.displayName = 'Summary';

Component.defaultProps = {
  areOnlyNightPriceAndRatingDisplayed: false,
  isShowingPlaceholder: false,
  periodText: PER_NIGHT,
  pricePerPeriod: '',
  pricePerPeriodPrefix: FROM_PRICE_PER_PERIOD,
  ratingNumber: undefined,
};

Component.propTypes = {
  /** Are the rating and the price only displayed */
  areOnlyNightPriceAndRatingDisplayed: PropTypes.bool,
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /** The name of the location of the property. */
  locationName: PropTypes.string.isRequired,
  /** The text describing the pricing period. */
  periodText: PropTypes.string,
  /** The price per night of the property, with currency symbol. */
  pricePerPeriod: PropTypes.string,
  /** The text prefix to display along with the price per period. */
  pricePerPeriodPrefix: PropTypes.string,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5 */
  ratingNumber: PropTypes.number,
};
