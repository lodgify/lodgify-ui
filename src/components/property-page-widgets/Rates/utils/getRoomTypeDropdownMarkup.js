import React from 'react';

import { Dropdown } from 'inputs/Dropdown';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';

/**
 * @param {Object[]} options
 * @param {Function} onChange
 * @return {Object}
 */
export const getRoomTypeDropdownMarkup = (options, onChange) => (
  <Grid stackable verticalAlign="middle">
    <GridRow columns={2}>
      <GridColumn width={4}>View Rate Information for:</GridColumn>
      <GridColumn width={4}>
        <Dropdown onChange={onChange} options={options} />
      </GridColumn>
    </GridRow>
  </Grid>
);
