import 'semantic-ui-styles/grid.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

/**
 * Grid is the Lodgify UI interface for the
 * Semantic UI Grid.
 *
 * To customise how the Grid gets computed, override the @columnCount
 * definition of Semantic UI.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ areColumnsCentered, isStackable, ...props }) => (
  <Grid {...props} centered={areColumnsCentered} stackable={isStackable} />
);

Component.displayName = 'Grid';

Component.defaultProps = {
  areColumnsCentered: false,
  isStackable: false,
};

Component.propTypes = {
  /** Are the columns in the grid centered. */
  areColumnsCentered: PropTypes.bool,
  /** Do the items in the grid stack on top of one another on mobile devices. */
  isStackable: PropTypes.bool,
};
