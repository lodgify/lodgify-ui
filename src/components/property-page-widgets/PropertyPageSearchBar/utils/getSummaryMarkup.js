import React from 'react';

import { Summary } from 'property-page-widgets/Summary';

/**
 * @param   {Object}    props
 * @param   {boolean}   props.areOnlyNightPriceAndRatingDisplayed
 * @param   {string}    props.locationName
 * @param   {string}    props.pricePerPeriod
 * @param   {string}    props.pricePerPeriodPrefix
 * @param   {string}    props.propertyName
 * @param   {number}    props.ratingNumber
 * @return  {Function}
 */
export const getSummaryMarkup = ({
  /* eslint-disable react/prop-types */
  areOnlyNightPriceAndRatingDisplayed,
  locationName,
  periodText,
  pricePerPeriod,
  pricePerPeriodPrefix,
  propertyName,
  ratingNumber,
  isShowingPlaceholder,
  /* eslint-enable react/prop-types */
}) => (
  <Summary
    areOnlyNightPriceAndRatingDisplayed={areOnlyNightPriceAndRatingDisplayed}
    isShowingPlaceholder={isShowingPlaceholder}
    locationName={locationName}
    periodText={periodText}
    pricePerPeriod={pricePerPeriod}
    pricePerPeriodPrefix={pricePerPeriodPrefix}
    propertyName={propertyName}
    ratingNumber={ratingNumber}
  />
);
