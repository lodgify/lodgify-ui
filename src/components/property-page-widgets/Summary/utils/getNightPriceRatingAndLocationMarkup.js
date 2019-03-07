import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';

import { getNightPriceMarkup } from 'utils/get-night-price-markup';
import { Rating } from 'elements/Rating';
import { TextPlaceholder } from 'elements/TextPlaceholder';

import { getLocationNameMarkup } from '../utils/getLocationNameMarkup';

/**
 * @param  {number} ratingNumber
 * @param  {string} nightPrice
 * @param  {string} locationName
 * @param  {boolean} isShowingPlaceholder
 * @return {Object}
 */
export const getNightPriceRatingAndLocationMarkup = (
  ratingNumber,
  nightPrice,
  locationName,
  isShowingPlaceholder
) => (
  <Fragment>
    {getLocationNameMarkup(locationName)}
    {isShowingPlaceholder ? (
      <div className="inline-placeholder-wrapper">
        <TextPlaceholder />
        <TextPlaceholder />
      </div>
    ) : (
      <Fragment>
        {ratingNumber !== 0 && (
          <Segment className="is-rating">
            <Rating iconSize="tiny" ratingNumber={ratingNumber} />
          </Segment>
        )}
        <Segment>{getNightPriceMarkup(nightPrice, 'small')}</Segment>
      </Fragment>
    )}
  </Fragment>
);
