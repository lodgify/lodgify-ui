import React from 'react';
import { Rating, Segment } from 'semantic-ui-react';

import { getNightPriceMarkup } from 'utils/get-night-price-markup/';

/**
 * @param  {number} ratingNumber
 * @param  {string} nightPrice
 * @return {Object}
 */
export const getRatingAndNightPriceMarkup = (ratingNumber, nightPrice) => (
  <Segment.Group horizontal>
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
  </Segment.Group>
);
