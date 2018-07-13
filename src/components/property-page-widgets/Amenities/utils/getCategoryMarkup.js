import React from 'react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Icon } from 'elements/Icon';

import { getFormattedAmenityItems } from './getFormattedAmenityItems';

/**
 * @param  {Object} category
 * @param  {String} keyString
 * @return {Object}
 */
export const getCategoryMarkup = (category, keyString) => (
  <GridRow key={buildKeyFromStrings(category.name, keyString)}>
    <GridColumn>
      <Icon
        isLabelLeft
        label={category.name}
        labelWeight="heavy"
        name={category.iconName}
      />
    </GridColumn>
    <GridColumn>{getFormattedAmenityItems(category.items)}</GridColumn>
  </GridRow>
);
