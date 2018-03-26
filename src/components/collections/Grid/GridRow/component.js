import React from 'react';
import { Grid } from 'semantic-ui-react';

/**
 * GridRow is the Lodgify UI interface for the
 * Semantic UI Grid.Row.
 *
 * @returns {Object}
 */
export const Component = props => <Grid.Row {...props} />;

Component.displayName = 'GridRow';
