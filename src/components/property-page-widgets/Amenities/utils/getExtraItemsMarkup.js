import 'semantic-ui-styles/modal.less';
import React from 'react';
import { Modal as SemanticModal } from 'semantic-ui-react';

import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Grid } from 'layout/Grid';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';

import { getCategoryMarkup } from './getCategoryMarkup';

/**
 * @param {boolean} hasExtraItemsInModal
 * @param {string} modalTriggerText
 * @param {Object[]} amenities
 * @return {Object}
 */
export const getExtraItemsMarkup = (
  hasExtraItemsInModal,
  modalTriggerText,
  amenities
) =>
  hasExtraItemsInModal ? (
    <GridColumn width={12}>
      <Modal hasPadding trigger={<Link>{modalTriggerText}</Link>}>
        <SemanticModal.Content>
          <Grid className="is-amenities" columns={1} isStackable padded>
            <GridRow>{amenities.map(getCategoryMarkup)}</GridRow>
          </Grid>
        </SemanticModal.Content>
      </Modal>
    </GridColumn>
  ) : (
    amenities.map((amenity, index) => getCategoryMarkup(amenity, index))
  );
