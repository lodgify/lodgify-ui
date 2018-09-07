import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

/**
 * A modal displays content that temporarily
 * blocks interactions with the main view of a page.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children, isFullscreen, size, trigger }) => (
  <Modal
    closeIcon={<Icon name={ICON_NAMES.CLOSE} />}
    content={children}
    dimmer="inverted"
    size={isFullscreen ? 'fullscreen' : size}
    trigger={trigger}
  />
);

Component.displayName = 'Modal';

Component.defaultProps = {
  isFullscreen: false,
  size: 'tiny',
};

Component.propTypes = {
  /** The content of the modal when displayed. */
  children: PropTypes.node.isRequired,
  /** Is the modal filling the whole screen when displayed. */
  isFullscreen: PropTypes.bool,
  /** The size of the modal */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large']),
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node.isRequired,
};
