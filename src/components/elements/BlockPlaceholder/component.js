import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

/**
 * A BlockPlaceholder indicates that a block of content will soon appear in a layout.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ isFluid, isRectangular, isSquare }) => (
  <div
    className={classnames('placeholder block', {
      fluid: isFluid,
      rectangle: isRectangular,
      square: isSquare,
    })}
  />
);

Component.displayName = 'BlockPlaceholder';

Component.defaultProps = {
  isFluid: false,
  isSquare: false,
  isRectangular: false,
};

Component.propTypes = {
  /** The placeholder fills the height and width of its parent. */
  isFluid: PropTypes.bool,
  /** The placeholder maintains 4:3 proportions. */
  isRectangular: PropTypes.bool,
  /** The placeholder maintains 1:1 proportions. */
  isSquare: PropTypes.bool,
};
