import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Message } from 'semantic-ui-react';

/**
 * A message displays information that explains nearby content.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children, isTextAlignedCenter }) => (
  <Message
    className={classNames('padded', {
      'text-aligned-center': isTextAlignedCenter,
    })}
  >
    {children}
  </Message>
);

Component.displayName = 'Message';

Component.defaultProps = {
  children: null,
  isTextAlignedCenter: false,
};

Component.propTypes = {
  /** The children to show in the message. */
  children: PropTypes.node,
  /** Is the message text aligned to the center. */
  isTextAlignedCenter: PropTypes.bool,
};
