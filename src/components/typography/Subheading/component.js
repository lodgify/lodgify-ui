import React from 'react';
import PropTypes from 'prop-types';

/**
 * A subheading provides concise information about a block of content.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children }) => (
  <span className="ui sub header">{children}</span>
);

Component.displayName = 'Subheading';

Component.propTypes = {
  /** The subheading text. */
  children: PropTypes.string.isRequired,
};
