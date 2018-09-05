import React from 'react';

import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param  {Object} rate
 * @param  {string} rateHeading
 * @param  {string} key
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
