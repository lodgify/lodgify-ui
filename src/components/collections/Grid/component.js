import React from 'react';
import { Grid } from 'semantic-ui-react';
/**
 * Grid is the Lodgify UI 12-columns based component for the
 * Semantic UI Grid.
 *
 * @returns {Object}
 */
export const Component = props => (
  <Grid
    {...Object.assign(
      {},
      { ...props },
      {
        columns: 12,
      }
    )}
  />
);

Component.displayName = 'Grid';
