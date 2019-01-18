import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

/**
 * A modal displays content that temporarily
 * blocks interactions with the main view of a page.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  isFullscreen,
  isOpen,
  onClose,
  size,
  trigger,
}) => (
  <Modal
    closeIcon={<Icon name={ICON_NAMES.CLOSE} />}
    content={children}
    dimmer="inverted"
    onClose={onClose}
    open={isOpen}
    size={isFullscreen ? 'fullscreen' : size}
    trigger={trigger}
  />
);

Component.displayName = 'Modal';

Component.defaultProps = {
  isFullscreen: false,
  isOpen: undefined,
  onClose: Function.prototype,
  size: 'tiny',
};

Component.propTypes = {
  /** The content of the modal when displayed. */
  children: PropTypes.node.isRequired,
  /** Is the modal filling the whole screen when displayed. */
  isFullscreen: PropTypes.bool,
  /** Is the modal open. Used when consuming `Modal` as a controlled component. */
  isOpen: PropTypes.bool,
  /** A function called when a close event happens. Used when consuming `Modal` as a controlled component. */
  onClose: PropTypes.func,
  /** The size of the modal */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large']),
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node.isRequired,
};
