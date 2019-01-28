import React, { Fragment } from 'react';
import { isNil } from 'lodash';

import { Icon, ICON_NAMES } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

import { getCostPerExtraGuestString } from './getCostPerExtraGuestString';

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
      {!isNil(numberOfGuests) && (
        <Fragment>
          <Icon name={ICON_NAMES.GUESTS} />
          {numberOfGuests}
          <br />
        </Fragment>
      )}
      {!isNil(costPerExtraGuest) &&
        getCostPerExtraGuestString(costPerExtraGuest, costPerExtraGuestLabel)}
    </Paragraph>
  </div>
);
