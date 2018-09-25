import React from 'react';

import { Paragraph } from 'typography/Paragraph';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { GridColumn } from 'layout/GridColumn';
import { Icon } from 'elements/Icon';

import { getFormattedAmenityItems } from './getFormattedAmenityItems';

/**
 * @param  {Object}  category
 * @param  {number}  index
 * @return {Object}
 */
export const getCategoryMarkup = (category, index) => (
  <GridColumn key={buildKeyFromStrings(category.name, index)} width={null}>
    <Icon
      isLabelLeft
      labelText={category.name}
      labelWeight="heavy"
      name={category.iconName}
    />
    <Paragraph>{getFormattedAmenityItems(category.items)}</Paragraph>
  </GridColumn>
);
