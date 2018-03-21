import React from 'react';
import { Grid } from 'semantic-ui-react';

import { COLUMNS } from '../constants';
/**
 * GridRow is the Lodgify UI dumb component for the
 * Semantic UI Grid.Row.
 * @type {Object}
 */
export const Component = props => (
  <Grid.Row {...Object.assign({}, props, { columns: COLUMNS })} />
);

Component.displayName = 'GridRow';
