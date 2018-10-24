import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

/**
 * Grid is the Lodgify UI interface for the
 * Semantic UI Grid.
 *
 * To customise how the Grid gets computed, override the @columnCount
 * definition of Semantic UI.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ areColumnsCentered, ...props }) => (
  <Grid {...props} centered={areColumnsCentered} />
);

Component.displayName = 'Grid';

Component.defaultProps = {
  areColumnsCentered: false,
};

Component.propTypes = {
  /** Are the columns in the grid centered. */
  areColumnsCentered: PropTypes.bool,
};
