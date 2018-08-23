import React from 'react';
import PropTypes from 'prop-types';
import { Modal as SemanticModal } from 'semantic-ui-react';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';
import { VIEW_MORE } from 'utils/default-strings';

import { getDefaultItems } from './utils/getDefaultItems';
import { hasExtraItems } from './utils/hasExtraItems';
import { getCategoryMarkup } from './utils/getCategoryMarkup';

/**
 * The standard widget for displaying the amenities of a property.
 * @returns {Object}
 */
export const Component = ({
  amenities,
  headingText,
  isStacked,
  modalTriggerText,
}) => (
  <Grid stackable>
    {headingText && (
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
    )}
    {getDefaultItems(amenities, isStacked).map((amenity, index) =>
      getCategoryMarkup(amenity, index, isStacked)
    )}
    {hasExtraItems(amenities, isStacked) && (
      <GridColumn width={12}>
        <Modal trigger={<Link>{modalTriggerText}</Link>}>
          <SemanticModal.Content>
            <Grid padded stackable>
              {amenities.map(getCategoryMarkup)}
            </Grid>
          </SemanticModal.Content>
        </Modal>
      </GridColumn>
    )}
  </Grid>
);

Component.displayName = 'Amenities';

Component.defaultProps = {
  headingText: null,
  isStacked: false,
  modalTriggerText: VIEW_MORE,
};

Component.propTypes = {
  /** The amenity categories. */
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      /** The name of the icon to display for the category.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** The list of amenities */
      items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      /** The category name */
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** The text to display as a heading at the top of the amenities. */
  headingText: PropTypes.string,
  /** Are the amenities displayed stacked on top of one another */
  isStacked: PropTypes.bool,
  /** The text for the modal trigger */
  modalTriggerText: PropTypes.string,
};
