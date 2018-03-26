import React from 'react';
import { Grid } from 'semantic-ui-react';

/**
 * GridColumn is the Lodgify UI interface for the
 * Semantic UI Grid.Column.
 *
 * @returns {Object}
 */
export const Component = props => <Grid.Column {...props} />;

Component.displayName = 'GridColumn';
