import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';

import { getPropOnCondition } from 'utils/get-prop-on-condition';
import { Icon, ICON_NAMES } from 'elements/Icon';

/**
 * A sidebar hides additional content beside a page.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  hasCloseIcon,
  isVisible,
  onClickCloseIcon,
  renderSidebarContent,
  willSlideFromTop,
}) => (
  <Sidebar.Pushable>
    <Sidebar
      animation="overlay"
      direction={getPropOnCondition('top', willSlideFromTop)}
      visible={isVisible}
    >
      {hasCloseIcon && (
        <Icon name={ICON_NAMES.CLOSE} onClick={onClickCloseIcon} />
      )}
      {renderSidebarContent()}
    </Sidebar>
    <Sidebar.Pusher dimmed={isVisible}>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
);

Component.displayName = 'Sidebar';

Component.defaultProps = {
  children: undefined,
  hasCloseIcon: false,
  isVisible: false,
  onClickCloseIcon: Function.prototype,
  renderSidebarContent: Function.prototype,
  willSlideFromTop: false,
};

Component.propTypes = {
  /** The children which the sidebar appears over. */
  children: PropTypes.node,
  /** Does the sidebar have a close icon. */
  hasCloseIcon: PropTypes.bool,
  /** Is the sidebar visible. */
  isVisible: PropTypes.bool,
  /** A function called when the close icon is clicked. */
  onClickCloseIcon: PropTypes.func,
  /** A function which renders the content of the sidebar. */
  renderSidebarContent: PropTypes.func,
  /** Will the sidebar slide from the top. */
  willSlideFromTop: PropTypes.bool,
};
