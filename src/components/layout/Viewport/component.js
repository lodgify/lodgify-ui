import React from 'react';
import PropTypes from 'prop-types';

/**
 * A viewport fills the width of its parent element and the inner height of the browser window
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    {children}
  </div>
);

Component.displayName = 'Viewport';

Component.propTypes = {
  /** The children to be wrapped with a flex container. */
  children: PropTypes.node.isRequired,
};
