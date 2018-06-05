import React from 'react';

import { Icon } from 'elements/Icon';

import { buildPricePerExtraGuestString } from './buildPricePerExtraGuestString';

/**
 * @param {Object} rateCategory
 * @param {String} rateCategory.name
 * @param {String} rateCategory.dateRange
 * @param {String} rateCategory.numberOfGuests
 * @param {String} rateCategory.costPerExtraGuest
 * @return {Object}
 */
export const getRateCategoryHeadingMarkup = ({
  /* eslint-disable react/prop-types */
  name,
  dateRange,
  numberOfGuests,
  costPerExtraGuest,
  /* eslint-enable react/prop-types */
}) => (
  <div>
    <strong>{name}</strong>
    <br />
    {dateRange}
    <br />
    <Icon name="users" />
    {numberOfGuests}
    <br />
    {buildPricePerExtraGuestString(costPerExtraGuest)}
  </div>
);
