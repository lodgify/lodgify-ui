import React from 'react';
import { PropTypes } from 'prop-types';
import { Placeholder } from 'semantic-ui-react';

/**
 * A BlockPlaceholder indicates that a block of content will soon appear in a layout.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ isFluid, isRectangular, isSquare }) => (
  <Placeholder fluid={isFluid}>
    <Placeholder.Image rectangular={isRectangular} square={isSquare} />
  </Placeholder>
);

Component.displayName = 'BlockPlaceholder';

Component.defaultProps = {
  isFluid: true,
  isSquare: false,
  isRectangular: false,
};

Component.propTypes = {
  /** The placeholder fills the width of its parent. */
  isFluid: PropTypes.bool,
  /** The placeholder maintains 4:3 proportions. */
  isRectangular: PropTypes.bool,
  /** The placeholder maintains 1:1 proportions. */
  isSquare: PropTypes.bool,
};
