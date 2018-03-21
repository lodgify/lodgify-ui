import React from 'react';
import { Grid } from 'semantic-ui-react';

import { COLUMNS } from '../constants';
import { getTwelveColumnsWidthValue } from '../utils';
/**
 * GridRow is the Lodgify UI 12-columns based component for the
 * Semantic UI Grid.Row.
 * @type {Object}
 */
export const Component = props => (
  <Grid.Row
    {...Object.assign({}, props, {
      columns: getTwelveColumnsWidthValue(COLUMNS),
    })}
  />
);

Component.displayName = 'GridRow';
