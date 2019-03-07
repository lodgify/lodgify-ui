import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';

import { getNightPriceMarkup } from 'utils/get-night-price-markup';
import { Rating } from 'elements/Rating';
import { TextPlaceholder } from 'elements/TextPlaceholder';

/**
 * @param  {number} ratingNumber
 * @param  {string} nightPrice
 * @param  {boolean} isShowingPlaceholder
 * @return {Object}
 */
export const getNightPriceAndRatingMarkup = (
  ratingNumber,
  nightPrice,
  isShowingPlaceholder
) =>
  isShowingPlaceholder ? (
    <div className="placeholder-wrapper">
      <TextPlaceholder length="medium" />
      <TextPlaceholder length="short" />
    </div>
  ) : (
    <Fragment>
      <Segment>{getNightPriceMarkup(nightPrice, 'small')}</Segment>
      {ratingNumber !== 0 && (
        <Segment className="is-rating">
          <Rating iconSize="tiny" ratingNumber={ratingNumber} />
        </Segment>
      )}
    </Fragment>
  );
