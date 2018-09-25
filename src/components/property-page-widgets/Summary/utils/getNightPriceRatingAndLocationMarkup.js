import React, { Fragment } from 'react';
import { Rating, Segment } from 'semantic-ui-react';

import { getNightPriceMarkup } from 'utils/get-night-price-markup';

import { getLocationNameMarkup } from '../utils/getLocationNameMarkup';

/**
 * @param  {number} ratingNumber
 * @param  {string} nightPrice
 * @param  {string} locationName
 * @return {Object}
 */
export const getNightPriceRatingAndLocationMarkup = (
  ratingNumber,
  nightPrice,
  locationName
) => (
  <Fragment>
    {getLocationNameMarkup(locationName)}
    <Segment>
      {ratingNumber}
      <Rating
        disabled
        maxRating={5}
        rating={Math.round(ratingNumber)}
        size="tiny"
      />
    </Segment>
    <Segment>{getNightPriceMarkup(nightPrice, 'small')}</Segment>
  </Fragment>
);
