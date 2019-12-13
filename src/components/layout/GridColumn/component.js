import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

/**
 * GridColumn is the Lodgify UI interface for the
 * Semantic UI Grid.Column.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ id, verticalAlignContent, ...props }) => (
  <Grid.Column {...props} id={id} verticalAlign={verticalAlignContent} />
);

Component.displayName = 'GridColumn';

Component.defaultProps = {
  id: null,
  verticalAlignContent: 'top',
  width: null,
};

Component.propTypes = {
  /** The html id of the container dom element. */
  id: PropTypes.string,
  /** Vertically align the content of the column to the bottom, middle or top. */
  verticalAlignContent: PropTypes.oneOf(['bottom', 'middle', 'top']),
  /** The width of the column */
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
