import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from 'lib/get-unique-key';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Divider } from 'elements/Divider';

import { getFirstNineItems } from './utils/getFirstNineItems';
import { hasMoreThanNineItems } from './utils/hasMoreThanNineItems';

/**
 * The standard widget for displaying the amenities of a property.
 * @returns {Object}
 */
export const Component = ({ amenities }) => (
  <Grid>
    <GridColumn width={12}>
      <Heading>Amenities</Heading>
    </GridColumn>
    {getFirstNineItems(amenities).map(
      ({ iconName, isDisabled, label }, index) => (
        <GridColumn key={getUniqueKey(label, index)} width={4}>
          <Icon isDisabled={isDisabled} label={label} name={iconName} />
        </GridColumn>
      )
    )}
    {hasMoreThanNineItems(amenities) && (
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
};
