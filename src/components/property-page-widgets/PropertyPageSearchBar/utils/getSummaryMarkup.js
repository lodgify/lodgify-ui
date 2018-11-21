import React from 'react';

import { Summary } from 'property-page-widgets/Summary';

/**
 * @param   {Object}    props
 * @param   {boolean}   props.areOnlyNightPriceAndRatingDisplayed
 * @param   {string}    props.locationName
 * @param   {string}    props.nightPrice
 * @param   {string}    props.propertyName
 * @param   {number}    props.ratingNumber
 * @return  {Function}
 */
export const getSummaryMarkup = ({
  /* eslint-disable react/prop-types */
  areOnlyNightPriceAndRatingDisplayed,
  locationName,
  nightPrice,
  propertyName,
  ratingNumber,
  /* eslint-enable react/prop-types */
}) => (
  <Summary
    areOnlyNightPriceAndRatingDisplayed={areOnlyNightPriceAndRatingDisplayed}
    locationName={locationName}
    nightPrice={nightPrice}
    propertyName={propertyName}
    ratingNumber={ratingNumber}
  />
);
