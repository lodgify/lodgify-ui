import React from 'react';

import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param {Object} rateCategory
 * @param {String[]} rateHeadings
 * @param {String} key
 * @return {Object}
 */
export const getMobileRateRowMarkup = (rate, rateHeading, key) => (
  <GridRow columns={2} key={key}>
    <GridColumn floated="left">
      <Paragraph weight="heavy">{rateHeading}</Paragraph>
    </GridColumn>
    <GridColumn floated="right" textAlign="right">
      {rate}
    </GridColumn>
  </GridRow>
);
