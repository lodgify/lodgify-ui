import React from 'react';

import { Heading } from 'typography/Heading';

/**
 *  @param {string} pricePerPeriod
 *  @param {string} periodText
 *  @param {string} [size='medium']
 *  @returns {string}
 */
export const getPricePerPeriodMarkup = (
  pricePerPeriod,
  periodText,
  size = 'medium'
) => (
  <span>
    from <Heading size={size}>{pricePerPeriod}</Heading>
    {`/${periodText}`}
  </span>
);
