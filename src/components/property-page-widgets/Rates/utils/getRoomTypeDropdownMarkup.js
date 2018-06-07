import React from 'react';

import { Dropdown } from 'inputs/Dropdown';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param {Object[]} options
 * @param {Function} onChange
 * @return {Object}
 */
export const getRoomTypeDropdownMarkup = (options, onChange) => (
  <GridRow verticalAlign="middle">
    <GridColumn computer={4} mobile={12}>
      <Paragraph weight="heavy">View Rate Information for:</Paragraph>
    </GridColumn>
    <GridColumn computer={4} mobile={12}>
      <Dropdown onChange={onChange} options={options} />
    </GridColumn>
  </GridRow>
);
