import React from 'react';

import { Dropdown } from 'inputs/Dropdown';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';

import { getStringWithColonSuffix } from './getStringWithColonSuffix';
/**
 * @param  {Object[]} options
 * @param  {Function} onChange
 * @param  {string}   roomTypeInputLabel
 * @param  {string|boolean|number} roomTypesValue
 * @return {Object}
 */
export const getRoomTypeDropdownMarkup = (
  options,
  onChange,
  roomTypeInputLabel,
  roomTypesValue
) => (
  <GridRow verticalAlign="middle">
    <GridColumn computer={4} mobile={12}>
      <Paragraph weight="heavy">
        {getStringWithColonSuffix(roomTypeInputLabel)}
      </Paragraph>
    </GridColumn>
    <GridColumn computer={4} mobile={12}>
      <Dropdown
        currentValue={roomTypesValue}
        onChange={onChange}
        options={options}
      />
    </GridColumn>
  </GridRow>
);
