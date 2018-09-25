import React, { Fragment } from 'react';
import { Rating, Segment } from 'semantic-ui-react';

import { getNightPriceMarkup } from 'utils/get-night-price-markup';

/**
 * @param  {number} ratingNumber
 * @param  {string} nightPrice
 * @return {Object}
 */
export const getNightPriceAndRatingMarkup = (ratingNumber, nightPrice) => (
  <Fragment>
    <Segment>{getNightPriceMarkup(nightPrice, 'small')}</Segment>
    <Segment>
      {ratingNumber}
      <Rating
        disabled
        maxRating={5}
        rating={Math.round(ratingNumber)}
        size="tiny"
      />
    </Segment>
  </Fragment>
);
