import React from 'react';

import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

import { buildPricePerExtraGuestString } from './buildPricePerExtraGuestString';

/**
 * @param {Object} rateCategory
 * @param {String} rateCategory.costPerExtraGuest
 * @param {String} rateCategory.dateRange
 * @param {String} rateCategory.name
 * @param {String} rateCategory.numberOfGuests
 * @return {Object}
 */
export const getRateCategoryHeadingMarkup = ({
  /* eslint-disable react/prop-types */
  costPerExtraGuest,
  dateRange,
  name,
  numberOfGuests,
  /* eslint-enable react/prop-types */
}) => (
  <div>
    <Paragraph weight="heavy">{name}</Paragraph>
    <Paragraph weight="light">
      {dateRange}
      <br />
      <Icon name="guests" />
      {numberOfGuests}
      <br />
      {buildPricePerExtraGuestString(costPerExtraGuest)}
    </Paragraph>
  </div>
);
