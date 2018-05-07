import React from 'react';
import PropTypes from 'prop-types';

import { withResponsive } from 'utils/with-responsive';
import { getUniqueKey } from 'utils/get-unique-key';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Divider } from 'elements/Divider';

import { getDefaultItems } from './utils/getDefaultItems';
import { hasExtraItems } from './utils/hasExtraItems';

/**
 * The standard widget for displaying the amenities of a property.
 * @returns {Object}
 */
const Component = ({ amenities, isUserOnMobile }) => (
  <Grid>
    <GridColumn width={12}>
      <Heading>Amenities</Heading>
    </GridColumn>
    {getDefaultItems(amenities, isUserOnMobile).map(
      ({ iconName, isDisabled, label }, index) => (
        <GridColumn
          key={getUniqueKey(label, index)}
          computer={4}
          tablet={4}
          mobile={6}
        >
          <Icon isDisabled={isDisabled} label={label} name={iconName} />
        </GridColumn>
      )
    )}
    {hasExtraItems(amenities, isUserOnMobile) && (
      <GridColumn width={12}>
        <Modal trigger={<Link>View more</Link>}>
          {amenities.map(({ iconName, isDisabled, label }, index) => (
            <div key={getUniqueKey(label, index)}>
              {!!index && <Divider hasLine />}
              <Icon isDisabled={isDisabled} label={label} name={iconName} />
            </div>
          ))}
        </Modal>
      </GridColumn>
    )}
  </Grid>
);

Component.displayName = 'Amenities';

Component.propTypes = {
  /** The amenities to display as icons. */
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/Icon)
       */
      iconName: PropTypes.string.isRequired,
      /** Is the amenity disabled. */
      isDisabled: PropTypes.bool,
      /** A visible label to display for the amenity. */
      label: PropTypes.string.isRequired,
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
