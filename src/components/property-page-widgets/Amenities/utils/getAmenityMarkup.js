import React from 'react';

import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';

import { getDefaultItems } from './getDefaultItems';
import { hasExtraItems } from './hasExtraItems';
import { getCategoryMarkup } from './getCategoryMarkup';
import { getExtraItemsMarkup } from './getExtraItemsMarkup';

/**
 * @param {Object[]}  amenities
 * @param {boolean}   hasExtraItemsInModal
 * @param {string}    headingText
 * @param {boolean}   isStacked
 * @param {string}    modalTriggerText
 * @return {Object}
 */
export const getAmenityMarkup = (
  amenities,
  hasExtraItemsInModal,
  headingText,
  isStacked,
  modalTriggerText
) => (
  <Grid className="is-amenities" columns={isStacked ? 1 : 3}>
    <GridRow>
      {headingText && (
        <GridColumn width={12}>
          <Heading>{headingText}</Heading>
        </GridColumn>
      )}
      {getDefaultItems(amenities, isStacked).map((amenity, index) =>
        getCategoryMarkup(amenity, index)
      )}
      {hasExtraItems(amenities, isStacked) &&
        getExtraItemsMarkup(hasExtraItemsInModal, modalTriggerText, amenities)}
    </GridRow>
  </Grid>
);
