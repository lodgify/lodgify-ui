import React from 'react';
import PropTypes from 'prop-types';

/**
 * A container for placing children in a fixed position relative to the viewport.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ bottom, children, left, right, top, zIndex }) => (
  <div
    style={{
      bottom,
      display: 'inline-block',
      left,
      position: 'fixed',
      right,
      top,
      zIndex,
    }}
  >
    {children}
  </div>
);

Component.displayName = 'FixedContainer';

Component.defaultProps = {
  bottom: '',
  left: '',
  right: '',
  top: '',
  zIndex: 1,
};

Component.propTypes = {
  /** The distance between the container's bottom edge and the bottom edge of the viewport. */
  bottom: PropTypes.string,
  /** The children to be wrapped with a fixed container. */
  children: PropTypes.node.isRequired,
  /** The distance between the container's left edge and the left edge of the viewport. */
  left: PropTypes.string,
  /** The distance between the container's right edge and the right edge of the viewport. */
  right: PropTypes.string,
  /** The distance between the container's top edge and the top edge of the viewport. */
  top: PropTypes.string,
  /** The priority of the fixed container in the stacking context of the page. */
  zIndex: PropTypes.number,
};
