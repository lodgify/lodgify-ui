import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import getClassNames from 'classnames';

/**
 * GridColumn is the Lodgify UI interface for the
 * Semantic UI Grid.Column.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ hasNoPadding, verticalAlignContent, ...props }) => (
  <Grid.Column
    {...props}
    className={getClassNames({
      'has-no-padding': hasNoPadding,
    })}
    verticalAlign={verticalAlignContent}
  />
);

Component.displayName = 'GridColumn';

Component.defaultProps = {
  hasNoPadding: false,
  verticalAlignContent: 'top',
  width: null,
};

Component.propTypes = {
  /** Does the column have no padding */
  hasNoPadding: PropTypes.bool,
  /** Vertically align the content of the column to the bottom, middle or top. */
  verticalAlignContent: PropTypes.oneOf(['bottom', 'middle', 'top']),
  /** The width of the column */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
