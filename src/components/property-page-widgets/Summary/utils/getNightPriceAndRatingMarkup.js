import React, { Fragment } from 'react';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';

import { getNightPriceMarkup } from 'utils/get-night-price-markup';
import { Rating } from 'elements/Rating';

/**
 * @param  {number} ratingNumber
 * @param  {string} nightPrice
 * @return {Object}
 */
export const getNightPriceAndRatingMarkup = (ratingNumber, nightPrice) => (
  <Fragment>
    <Segment>{getNightPriceMarkup(nightPrice, 'small')}</Segment>
    <Segment>
      <Rating iconSize="tiny" ratingNumber={ratingNumber} />
    </Segment>
  </Fragment>
);
