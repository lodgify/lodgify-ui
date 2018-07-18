import React from 'react';
import PropTypes from 'prop-types';
import { Modal as SemanticModal } from 'semantic-ui-react';

import { withResponsive } from 'utils/with-responsive';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';

import { getDefaultItems } from './utils/getDefaultItems';
import { hasExtraItems } from './utils/hasExtraItems';
import { getCategoryMarkup } from './utils/getCategoryMarkup';

/**
 * The standard widget for displaying the amenities of a property.
 * @returns {Object}
 */
const Component = ({ amenities, isUserOnMobile }) => (
  <Grid stackable>
    <GridColumn width={12}>
      <Heading>Property Amenities</Heading>
    </GridColumn>
    {getDefaultItems(amenities, isUserOnMobile).map((amenity, index) =>
      getCategoryMarkup(amenity, index, isUserOnMobile)
    )}
    {hasExtraItems(amenities, isUserOnMobile) && (
      <GridColumn width={12}>
        <Modal trigger={<Link>View more</Link>}>
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

Component.propTypes = {
  /** The amenity categories. */
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      /** The name of the icon to display for the category. */
      iconName: PropTypes.string.isRequired,
      /** The list of amenities */
      items: PropTypes.arrayOf(PropTypes.string.isRequired),
      /** The category name */
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
};

export const ComponentWithResponsive = withResponsive(Component);
