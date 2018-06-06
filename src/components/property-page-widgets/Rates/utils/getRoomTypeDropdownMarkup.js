import React from 'react';

import { Dropdown } from 'inputs/Dropdown';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param {Object[]} options
 * @param {Function} onChange
 * @return {Object}
 */
export const getRoomTypeDropdownMarkup = (options, onChange) => (
  <Grid stackable verticalAlign="middle">
    <GridRow columns={2}>
      <GridColumn width={4}>
        <Paragraph weight="heavy">View Rate Information for:</Paragraph>
      </GridColumn>
      <GridColumn width={4}>
        <Dropdown options={options} onChange={onChange} />
      </GridColumn>
    </GridRow>
  </Grid>
);
