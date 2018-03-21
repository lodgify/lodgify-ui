import React from 'react';
import { Grid } from 'semantic-ui-react';

import { COLUMNS } from './constants';
import { getTwelveColumnsWidthValue } from './utils';
/**
 * Grid is the Lodgify UI 12-columns based component for the
 * Semantic UI Grid.
 * @type {Object}
 */
export const Component = props => (
  <Grid
    {...Object.assign({}, props, {
      columns: getTwelveColumnsWidthValue(COLUMNS),
    })}
  />
);

Component.displayName = 'Grid';
