import React from 'react';
import { Rating } from 'semantic-ui-react';

/**
 * @param {Number}   ratingNumber
 * @return {String}
 */
export const getRatingMarkup = ratingNumber => (
  <div>
    {ratingNumber}
    <Rating
      disabled
      maxRating={5}
      rating={Math.round(ratingNumber)}
      size="tiny"
    />
  </div>
);
