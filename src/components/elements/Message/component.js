import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

/**
 * A message displays information that explains nearby content.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children }) => (
  <Message className="padded">{children}</Message>
);

Component.displayName = 'Message';

Component.defaultProps = {
  children: null,
};

Component.propTypes = {
  /** The children to show in the message. */
  children: PropTypes.node,
};
