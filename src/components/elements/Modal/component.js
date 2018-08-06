import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

/**
 * A modal displays content that temporarily
 * blocks interactions with the main view of a page.
 * @return {Object}
 */
export const Component = ({ children, isFullscreen, trigger }) => (
  <Modal
    closeIcon={<Icon name={ICON_NAMES.CLOSE} />}
    content={children}
    dimmer="inverted"
    size={isFullscreen ? 'fullscreen' : 'tiny'}
    trigger={trigger}
  />
);

Component.displayName = 'Modal';

Component.defaultProps = {
  isFullscreen: false,
};

Component.propTypes = {
  /** The content of the modal when displayed. */
  children: PropTypes.node.isRequired,
  /** Is the modal filling the whole screen when displayed. */
  isFullscreen: PropTypes.bool,
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node.isRequired,
};
