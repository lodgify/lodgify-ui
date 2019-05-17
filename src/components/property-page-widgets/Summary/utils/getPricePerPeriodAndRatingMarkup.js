import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';

import { getPricePerPeriodMarkup } from 'utils/get-price-per-period-markup';
import { Rating } from 'elements/Rating';
import { TextPlaceholder } from 'elements/TextPlaceholder';

/**
 * @param  {boolean} isShowingPlaceholder
 * @param  {string}  periodText
 * @param  {string}  pricePerPeriod
 * @param  {number}  ratingNumber
 * @return {Object}
 */
export const getPricePerPeriodAndRatingMarkup = (
  isShowingPlaceholder,
  periodText,
  pricePerPeriod,
  ratingNumber
) =>
  isShowingPlaceholder ? (
    <div className="placeholder-wrapper">
      <TextPlaceholder length="medium" />
      <TextPlaceholder length="short" />
    </div>
  ) : (
    <Fragment>
      <Segment>
        {getPricePerPeriodMarkup(pricePerPeriod, periodText, 'small')}
      </Segment>
      {!!ratingNumber && (
        <Segment className="is-rating">
          <Rating iconSize="tiny" ratingNumber={ratingNumber} />
        </Segment>
      )}
    </Fragment>
  );
