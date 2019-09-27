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
 * @param  {string} pricePerPeriodPrefix
 * @param  {number} ratingNumber
 * @return {Object}
 */
export const getPricePerPeriodAndLocationMarkup = (
  isShowingPlaceholder,
  locationName,
  periodText,
  pricePerPeriod,
  pricePerPeriodPrefix,
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
        {!!ratingNumber && (
          <Segment className="is-rating">
            <Rating iconSize="tiny" ratingNumber={ratingNumber} />
          </Segment>
        )}
        <Segment>
          {getPricePerPeriodMarkup(
            pricePerPeriod,
            pricePerPeriodPrefix,
            periodText,
            'small'
          )}
        </Segment>
      </Fragment>
    )}
  </Fragment>
);
