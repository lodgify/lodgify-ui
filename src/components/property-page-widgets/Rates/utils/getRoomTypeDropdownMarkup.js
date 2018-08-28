import React from 'react';

import { Dropdown } from 'inputs/Dropdown';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param {Object[]} options
 * @param {Function} onChange
 * @param {String}   roomTypeHeadingText
 * @return {Object}
 */
export const getRoomTypeDropdownMarkup = (
  options,
  onChange,
  roomTypeHeadingText
) => (
  <GridRow verticalAlign="middle">
    <GridColumn computer={4} mobile={12}>
      <Paragraph weight="heavy">{roomTypeHeadingText}</Paragraph>
    </GridColumn>
    <GridColumn computer={4} mobile={12}>
      <Dropdown onChange={onChange} options={options} />
    </GridColumn>
  </GridRow>
);
