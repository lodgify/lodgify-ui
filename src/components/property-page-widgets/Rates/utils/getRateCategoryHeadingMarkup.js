import React from 'react';

import { Icon, ICON_NAMES } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

import { buildPricePerExtraGuestString } from './buildPricePerExtraGuestString';

/**
 * @param {Object} rateCategory
 * @param {string} rateCategory.costPerExtraGuest
 * @param {string} rateCategory.dateRange
 * @param {string} rateCategory.name
 * @param {string} rateCategory.numberOfGuests
 * @param {string} costPerExtraGuestLabel
 * @return {Object}
 */
export const getRateCategoryHeadingMarkup = (
  {
    /* eslint-disable react/prop-types */
    costPerExtraGuest,
    dateRange,
    name,
    numberOfGuests,
    /* eslint-enable react/prop-types */
  },
  costPerExtraGuestLabel
) => (
  <div>
    <Paragraph weight="heavy">{name}</Paragraph>
    <Paragraph weight="light">
      {dateRange}
      <br />
      <Icon name={ICON_NAMES.GUESTS} />
      {numberOfGuests}
      <br />
      {buildPricePerExtraGuestString(costPerExtraGuest, costPerExtraGuestLabel)}
    </Paragraph>
  </div>
);
