import React from 'react';
import PropTypes from 'prop-types';

import { SLEEPING_ARRANGEMENTS } from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { IconCard } from 'elements/IconCard';
import { VerticalGutters } from 'layout/VerticalGutters';

/**
 * The standard widget for displaying the sleeping arrangments for a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ headingText, sleepingArrangements }) => (
  <VerticalGutters>
    <Heading>{headingText}</Heading>
    <Grid>
      {sleepingArrangements.map(({ iconName, label }, index) => (
        <GridColumn
          computer={2}
          key={buildKeyFromStrings(label, index)}
          mobile={4}
          tablet={4}
        >
          <IconCard isLeftAligned label={label} name={iconName} />
        </GridColumn>
      ))}
    </Grid>
  </VerticalGutters>
);

Component.displayName = 'SleepingArrangements';

Component.defaultProps = {
  headingText: SLEEPING_ARRANGEMENTS,
};

Component.propTypes = {
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The sleeping arrangements to display as icon cards. */
  sleepingArrangements: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The name of the icon to display.
       * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/production/src/components/elements/Icon/constants.js)
       */
      iconName: PropTypes.string.isRequired,
      /** A visible label to display for the sleeping arrangement. */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
