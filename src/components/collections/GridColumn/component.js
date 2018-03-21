import React from 'react';
import { Grid } from 'semantic-ui-react';

/**
 * GridColumn is the Lodgify UI dumb component for the
 * Semantic UI Grid.Column.
 * @type {Object}
 */
export const Component = props => <Grid.Column {...props} />;

Component.displayName = 'GridColumn';
