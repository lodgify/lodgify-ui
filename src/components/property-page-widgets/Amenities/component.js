import React from 'react';
import PropTypes from 'prop-types';

import { VIEW_MORE } from 'utils/default-strings';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';

import { getDefaultItems } from './utils/getDefaultItems';
import { hasExtraItems } from './utils/hasExtraItems';
import { getCategoryMarkup } from './utils/getCategoryMarkup';
import { getExtraItemsMarkup } from './utils/getExtraItemsMarkup';
import { getExtraItems } from './utils/getExtraItems';

/**
 * The standard widget for displaying the amenities of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  amenities,
  hasExtraItemsInModal,
  headingText,
  isStacked,
  modalTriggerText,
}) => (
  <Grid className="is-amenities" columns={isStacked ? 1 : 3}>
    <GridRow>
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
          getExtraItems(amenities, isStacked)
        )}
    </GridRow>
  </Grid>
);

Component.displayName = 'Amenities';

Component.defaultProps = {
  hasExtraItemsInModal: false,
  headingText: null,
  isStacked: false,
  modalTriggerText: VIEW_MORE,
};

Component.propTypes = {
  /** The amenity categories. */
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      /** The name of the icon to display for the category.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** The list of amenities */
      items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      /** The category name */
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Are the extra items displayed in a modal. */
  hasExtraItemsInModal: PropTypes.bool,
  /** The text to display as a heading at the top of the amenities. */
  headingText: PropTypes.string,
  /** Are the amenities displayed stacked on top of one another */
  isStacked: PropTypes.bool,
  /** The text for the modal trigger */
  modalTriggerText: PropTypes.string,
};
