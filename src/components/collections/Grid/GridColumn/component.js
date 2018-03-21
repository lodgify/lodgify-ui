import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

import { DEFAULT_COLUMN_WIDTH } from '../constants';
import { getTwelveColumnsWidthValue } from '../utils';
/**
 * GridColumn is the Lodgify UI 12-columns based component for the
 * Semantic UI Grid.Column.
 * @type {Object}
 */
export const Component = props => (
  <Grid.Column
    {...Object.assign({}, props, {
      width: getTwelveColumnsWidthValue(props.width),
    })}
  />
);

Component.defaultProps = {
  width: DEFAULT_COLUMN_WIDTH,
};

Component.propTypes = {
  width: PropTypes.number,
};

Component.displayName = 'GridColumn';
