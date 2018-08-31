import React from 'react';
import PropTypes from 'prop-types';
import { Container as SemanticContainer } from 'semantic-ui-react';

/**
 * Container is the Lodgify UI interface for the
 * Semantic UI Container.
 *
 * @returns {Object}
 */
export const Component = ({ textAlign, ...props }) => (
  <SemanticContainer {...props} textAlign={textAlign} />
);

Component.displayName = 'Container';

Component.defaultProps = {
  textAlign: 'left',
};

Component.propTypes = {
  /** The text align for nested children. */
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justified']),
};
