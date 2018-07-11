import React from 'react';

/**
 *  @param {String} nightPrice
 *  @param {String} size
 *  @returns {String}
 */

import { Heading } from 'typography/Heading';

export const getNightPriceMarkup = (nightPrice, size = 'medium') => (
  <span>
    from <Heading size={size}>{nightPrice}</Heading>/night
  </span>
);
