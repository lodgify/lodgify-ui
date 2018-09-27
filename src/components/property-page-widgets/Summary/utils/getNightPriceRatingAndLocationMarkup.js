import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';

import { getNightPriceMarkup } from 'utils/get-night-price-markup';
import { Rating } from 'elements/Rating';

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
      <Rating iconSize="tiny" ratingNumber={ratingNumber} />
    </Segment>
    <Segment>{getNightPriceMarkup(nightPrice, 'small')}</Segment>
  </Fragment>
);
