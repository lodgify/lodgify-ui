import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueKey } from 'lib/get-unique-key';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { IconCard } from 'elements/IconCard';

/**
 * The standard widget for displaying the sleeping arrangments for a property.
 * @returns {Object}
 */
export const Component = ({ sleepingArrangements }) => (
  <div>
    <Heading>Sleeping arrangements</Heading>
    <Grid>
      {sleepingArrangements.map(({ iconName, label }, index) => (
        <GridColumn
          computer={2}
          tablet={4}
          mobile={4}
          key={getUniqueKey(label, index)}
        >
          <IconCard isLeftAligned label={label} name={iconName} />
        </GridColumn>
      ))}
    </Grid>
  </div>
);

Component.displayName = 'SleepingArrangements';

Component.propTypes = {
  /** The sleeping arrangements to display as icon cards. */
  sleepingArrangements: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See Semantic UI for the full list.](https://react.semantic-ui.com/elements/IconCard)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the sleeping arrangement. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
