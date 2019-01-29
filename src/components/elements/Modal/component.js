import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { Icon, ICON_NAMES } from 'elements/Icon';

/**
 * A modal displays content that temporarily
 * blocks interactions with the main view of a page.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  dimmer,
  hasMargin,
  isAlignedBottom,
  isFullscreen,
<<<<<<< Updated upstream
  isJustifiedRight,
  isModalRounded,
=======
  closeIcon,
  hasRoundedCorners,
>>>>>>> Stashed changes
  isOpen,
  onClose,
  size,
  trigger,
}) => (
  <Modal
    className={getClassNames({
<<<<<<< Updated upstream
      'is-modal-rounded': isModalRounded,
      'is-justified-right': isJustifiedRight,
      'is-aligned-bottom': isAlignedBottom,
      'has-margin': hasMargin,
    })}
    closeIcon={<Icon name={ICON_NAMES.CLOSE} />}
=======
      'has-rounded-corners': hasRoundedCorners,
    })}
    closeIcon={closeIcon}
>>>>>>> Stashed changes
    content={children}
    dimmer={dimmer}
    onClose={onClose}
    open={isOpen}
    size={isFullscreen ? 'fullscreen' : size}
    trigger={trigger}
  />
);

Component.displayName = 'Modal';

Component.defaultProps = {
  dimmer: 'inverted',
  hasMargin: false,
  isAlignedBottom: false,
  isFullscreen: false,
<<<<<<< Updated upstream
  isJustifiedRight: false,
  isModalRounded: false,
=======
  hasRoundedCorners: false,
>>>>>>> Stashed changes
  isOpen: undefined,
  onClose: Function.prototype,
  size: 'tiny',
  closeIcon: <Icon name={ICON_NAMES.CLOSE} />,
};

Component.propTypes = {
  /** The content of the modal when displayed. */
  children: PropTypes.node.isRequired,
<<<<<<< Updated upstream
  /** The background which fills the empty space left by the modal container. */
  dimmer: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Does the modal have a margin. */
  hasMargin: PropTypes.bool,
  /** Is the modal aligned bottom. */
  isAlignedBottom: PropTypes.bool,
=======
  /** The icon to close the modal */
  closeIcon: PropTypes.node,
  /** Does the modal have round corners */
  hasRoundedCorners: PropTypes.bool,
>>>>>>> Stashed changes
  /** Is the modal filling the whole screen when displayed. */
  isFullscreen: PropTypes.bool,
  /** Is the modal justified right.*/
  isJustifiedRight: PropTypes.bool,
  /** Are the edges of the modal round */
  isModalRounded: PropTypes.bool,
  /** Is the modal open. Used when consuming `Modal` as a controlled component. */
  isOpen: PropTypes.bool,
  /** A function called when a close event happens. Used when consuming `Modal` as a controlled component. */
  onClose: PropTypes.func,
  /** The size of the modal. */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large']),
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node.isRequired,
};
