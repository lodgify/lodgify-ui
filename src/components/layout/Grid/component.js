import React from 'react';
import { Grid } from 'semantic-ui-react';
/**
 * Grid is the Lodgify UI interface for the
 * Semantic UI Grid.
 *
 * To customise how the Grid gets computed, override the @columnCount
 * definition of Semantic UI.
 *
 * @returns {Object}
 */
export const Component = props => <Grid {...props} />;

Component.displayName = 'Grid';
