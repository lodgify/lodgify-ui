import React from 'react';

import { Paragraph } from 'typography/Paragraph';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { GridColumn } from 'layout/GridColumn';
import { Icon } from 'elements/Icon';

import { getFormattedAmenityItems } from './getFormattedAmenityItems';

/**
 * @param  {Object}  category
 * @param  {number}  index
 * @param  {boolean} [isFullWidth=false]
 * @return {Object}
 */
export const getCategoryMarkup = (category, index, isFullWidth = false) => (
  <GridColumn
    key={buildKeyFromStrings(category.name, index)}
    width={isFullWidth ? 12 : 4}
  >
    <Icon
      isLabelLeft
      labelText={category.name}
      labelWeight="heavy"
      name={category.iconName}
    />
    <Paragraph>{getFormattedAmenityItems(category.items)}</Paragraph>
  </GridColumn>
);
