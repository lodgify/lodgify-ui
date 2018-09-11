import React from 'react';
import { Modal as SemanticModal } from 'semantic-ui-react';

import { GridColumn } from 'layout/GridColumn';
import { Grid } from 'layout/Grid';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';

import { getCategoryMarkup } from './getCategoryMarkup';

/**
 * @param {boolean} hasExtraItemsInModal
 * @param {string} modalTriggerText
 * @param {Object[]} amenities
 * @param {boolean} isStacked
 * @return {Object}
 */
export const getExtraItemsMarkup = (
  hasExtraItemsInModal,
  modalTriggerText,
  amenities,
  isStacked
) =>
  hasExtraItemsInModal ? (
    <GridColumn width={12}>
      <Modal trigger={<Link>{modalTriggerText}</Link>}>
        <SemanticModal.Content>
          <Grid padded stackable>
            {amenities.map(getCategoryMarkup)}
          </Grid>
        </SemanticModal.Content>
      </Modal>
    </GridColumn>
  ) : (
    amenities.map((amenity, index) =>
      getCategoryMarkup(amenity, index, isStacked)
    )
  );
