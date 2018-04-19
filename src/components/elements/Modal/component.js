import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

/**
 * A modal displays content that temporarily
 * blocks interactions with the main view of a page.
 * @return {Object}
 */
export const Component = ({ children, trigger }) => (
  <Modal
    closeIcon={<Icon name="close" />}
    content={children}
    dimmer="inverted"
    size="tiny"
    trigger={trigger}
  />
);

Component.displayName = 'Modal';

Component.propTypes = {
  /** The content of the modal when display. */
  children: PropTypes.node.isRequired,
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node.isRequired,
};
