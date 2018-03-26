import React from 'react';
import { Grid } from 'semantic-ui-react';

/**
 * GridRow is the Lodgify UI 12-columns based component for the
 * Semantic UI Grid.Row.
 *
 * By default all Semantic UI props but `columns` are passed to Semantic,
 * so they can be reused
 *
 * @returns {Object}
 */
export const Component = props => (
  <Grid.Row {...Object.assign({}, { ...props }, { columns: 12 })} />
);

Component.displayName = 'GridRow';
