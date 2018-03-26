import React from 'react';
import { Grid } from 'semantic-ui-react';

import { DEFAULT_MAX_WIDTH } from '../constants';
import { getTwelveColumnsWidthValue } from '../utils';
/**
 * GridRow is the Lodgify UI 12-columns based component for the
 * Semantic UI Grid.Row.
 *
 * The [Semantic UI props](https://react.semantic-ui.com/collections/grid) can be for this component.
 * @returns {Object}
 */
export const Component = props => (
  <Grid.Row
    {...Object.assign({}, ...props, {
      columns: getTwelveColumnsWidthValue(DEFAULT_MAX_WIDTH),
    })}
  />
);

Component.displayName = 'GridRow';
