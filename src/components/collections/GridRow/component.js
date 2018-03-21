import React from 'react';
import { Grid } from 'semantic-ui-react';

/**
 * GridRow is the Lodgify UI dumb component for the
 * Semantic UI Grid.Row.
 * @type {Object}
 */
export const Component = props => <Grid.Row {...props} />;

Component.displayName = 'GridRow';
