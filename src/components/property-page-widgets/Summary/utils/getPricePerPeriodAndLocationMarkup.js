import React, { Fragment } from 'react';
import { Segment } from 'semantic-ui-react';

import { getPricePerPeriodMarkup } from 'utils/get-price-per-period-markup';
import { Rating } from 'elements/Rating';
import { TextPlaceholder } from 'elements/TextPlaceholder';

import { getLocationNameMarkup } from './getLocationNameMarkup';

/**
 * @param  {boolean} isShowingPlaceholder
 * @param  {string} locationName
 * @param  {string} periodText
 * @param  {string} pricePerPeriod
 * @param  {number} ratingNumber
 * @return {Object}
 */
export const getPricePerPeriodAndLocationMarkup = (
  isShowingPlaceholder,
  locationName,
  periodText,
  pricePerPeriod,
  ratingNumber
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
        <Segment>
          {getPricePerPeriodMarkup(pricePerPeriod, periodText, 'small')}
        </Segment>
      </Fragment>
    )}
  </Fragment>
);
