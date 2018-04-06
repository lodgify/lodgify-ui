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
export const Component = ({ amenities, width }) => (
  <GridColumn width={width}>
    <Heading size="tiny">Amenities</Heading>
    <Grid>
      {getFirstNineItems(amenities).map(
        ({ iconName, isDisabled, label }, i) => (
          <GridColumn key={getUniqueKey(label, i)} width={4}>
            <Icon isDisabled={isDisabled} label={label} name={iconName} />
          </GridColumn>
        )
      )}
      {hasMoreThanNineItems(amenities) && (
        <GridColumn width={12}>
          <Modal trigger={<Link>View more</Link>}>
            {amenities.map(({ iconName, isDisabled, label }, i) => (
              <div key={getUniqueKey(label, i)}>
                {!!i && <Divider hasLine />}
                <Icon isDisabled={isDisabled} label={label} name={iconName} />
              </div>
            ))}
          </Modal>
        </GridColumn>
      )}
    </Grid>
  </GridColumn>
);

Component.displayName = 'Amenities';

Component.defaultProps = {
  width: 12,
};

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
  /** The number of columns the widget occupies. */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
