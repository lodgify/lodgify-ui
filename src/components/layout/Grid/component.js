import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import getClassNames from 'classnames';

/**
 * Grid is the Lodgify UI interface for the
 * Semantic UI Grid.
 *
 * To customise how the Grid gets computed, override the @columnCount
 * definition of Semantic UI.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ areColumnsCentered, hasFixedWidth, ...props }) => (
  <Grid
    className={getClassNames({
      'has-fixed-width': hasFixedWidth,
    })}
    {...props}
    centered={areColumnsCentered}
  />
);

Component.displayName = 'Grid';

Component.defaultProps = {
  areColumnsCentered: false,
  hasFixedWidth: false,
};

Component.propTypes = {
  /** Are the columns in the grid centered. */
  areColumnsCentered: PropTypes.bool,
  /** Should the columns stick to their defined width. */
  hasFixedWidth: PropTypes.bool,
};
