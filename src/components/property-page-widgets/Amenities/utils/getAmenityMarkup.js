import React from 'react';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';

import { getDefaultItems } from './getDefaultItems';
import { hasExtraItems } from './hasExtraItems';
import { getCategoryMarkup } from './getCategoryMarkup';
import { getExtraItemsMarkup } from './getExtraItemsMarkup';

/**
 * @param {Object[]} amenities
 * @param {boolean} hasExtraItemsInModal
 * @param {string} headingText
 * @param {boolean} isStacked
 * @param {string} modalTriggerText
 */
export const getAmenityMarkup = (
  amenities,
  hasExtraItemsInModal,
  headingText,
  isStacked,
  modalTriggerText
) => (
  <Grid stackable>
    {headingText && (
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
    )}
    {getDefaultItems(amenities, isStacked).map((amenity, index) =>
      getCategoryMarkup(amenity, index, isStacked)
    )}
    {hasExtraItems(amenities, isStacked) &&
      getExtraItemsMarkup(
        hasExtraItemsInModal,
        modalTriggerText,
        amenities,
        isStacked
      )}
  </Grid>
);
