import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { Icon, ICON_NAMES } from 'elements/Icon';
import { HorizontalGutters } from 'layout/HorizontalGutters';

/**
 * A modal displays content that temporarily
 * blocks interactions with the main view of a page.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  header,
  hasCloseIcon,
  hasPadding,
  hasRoundedCorners,
  isFullscreen,
  isOpen,
  onClose,
  size,
  trigger,
}) => (
  <Modal
    className={getClassNames({
      'has-padding': hasPadding,
      'has-rounded-corners': hasRoundedCorners,
    })}
    closeIcon={hasCloseIcon && <Icon name={ICON_NAMES.CLOSE} />}
    dimmer="inverted"
    onClose={onClose}
    open={isOpen}
    size={isFullscreen ? 'fullscreen' : size}
    trigger={trigger}
  >
    {!!header && (
      <Modal.Header>
        <HorizontalGutters>{header}</HorizontalGutters>
      </Modal.Header>
    )}
    <Modal.Content>{children}</Modal.Content>
  </Modal>
);

Component.displayName = 'Modal';

Component.defaultProps = {
  header: null,
  hasCloseIcon: true,
  hasPadding: false,
  hasRoundedCorners: false,
  isFullscreen: false,
  isOpen: undefined,
  onClose: Function.prototype,
  trigger: null,
  size: 'tiny',
};

Component.propTypes = {
  /** The content of the modal when displayed. */
  children: PropTypes.node.isRequired,
  /** Does the modal have a close icon. */
  hasCloseIcon: PropTypes.bool,
  /** Does the modal have padding around its content. */
  hasPadding: PropTypes.bool,
  /** Does the modal have round corners. */
  hasRoundedCorners: PropTypes.bool,
  /** The header fixed at the top of the modal. */
  header: PropTypes.node,
  /** Is the modal filling the whole screen when displayed. */
  isFullscreen: PropTypes.bool,
  /** Is the modal open. Used when consuming `Modal` as a controlled component. */
  isOpen: PropTypes.bool,
  /** A function called when a close event happens. Used when consuming `Modal` as a controlled component. */
  onClose: PropTypes.func,
  /** The size of the modal. */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large']),
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node,
};
