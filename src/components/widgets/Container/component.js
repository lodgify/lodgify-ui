import React from 'react';
import PropTypes from 'prop-types';

/**
 * A container which renders other widgets inside of it.
 * @returns {Object}
 */
export const Component = ({ children }) => <div>{children}</div>;

Component.displayName = 'Container';

Component.defaultProps = {
  children: null,
};

Component.propTypes = {
  /** The children widgets. */
  children: PropTypes.node,
};
