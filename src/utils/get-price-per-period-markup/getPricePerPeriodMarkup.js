import React from 'react';

import { Heading } from 'typography/Heading';

/**
 *  @param {string} pricePerPeriod
 *  @param {string} pricePerPeriodPrefix
 *  @param {string} periodText
 *  @param {string} [size='medium']
 *  @returns {string}
 */
export const getPricePerPeriodMarkup = (
  pricePerPeriod,
  pricePerPeriodPrefix,
  periodText,
  size = 'medium'
) => (
  <span>
    {`${pricePerPeriodPrefix}`} <Heading size={size}>{pricePerPeriod}</Heading>
    {`${periodText}`}
  </span>
);
