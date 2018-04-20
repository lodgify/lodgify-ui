import React from 'react';
import PropTypes from 'prop-types';

/**
 * A subheading provides concise information about a block of content.
 * @return {Object}
 */
export const Component = ({ children }) => (
  <h5 className="ui sub header">{children}</h5>
);

Component.displayName = 'Subheading';

Component.propTypes = {
  /** The subheading text. */
  children: PropTypes.string.isRequired,
};
