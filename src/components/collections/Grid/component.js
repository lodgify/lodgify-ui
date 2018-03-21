import React from 'react';
import { Grid } from 'semantic-ui-react';

import { COLUMNS } from './constants';
/**
 * Grid is the Lodgify UI dumb component for the
 * Semantic UI Grid.
 * @type {Object}
 */
export const Component = props => (
  <Grid {...Object.assign({}, props, { columns: COLUMNS })} />
);

Component.displayName = 'Grid';
