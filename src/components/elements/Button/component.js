import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

/**
 * A button indicates a possible user action.
 * @return {Object}
 */
export const Component = ({
  children,
  isDisabled,
  isLoading,
  isPositionedRight,
  onClick,
  isRounded,
  isSecondary,
  isCompact,
  hasShadow,
  icon,
  size,
}) => (
  <Button
    circular={isRounded}
    className={cx({
      'has-shadow': !!hasShadow,
    })}
    compact={isCompact}
    disabled={isDisabled}
    floated={isPositionedRight ? 'right' : 'left'}
    loading={isLoading}
    onClick={onClick}
    secondary={isSecondary}
    size={size}
  >
    {!!icon && <Icon name={icon} />}
    {children}
  </Button>
);

Component.displayName = 'Button';

Component.defaultProps = {
  children: null,
  onClick: Function.prototype,
  isDisabled: false,
  isPositionedRight: false,
  isLoading: false,
  isRounded: false,
  isSecondary: false,
  isCompact: false,
  hasShadow: false,
  icon: null,
  size: null,
};

Component.propTypes = {
  /** The content to display in the button. */
  children: PropTypes.node,
  /** Has the button shadow. */
  hasShadow: PropTypes.bool,
  /** An icon to display in the button */
  icon: PropTypes.string,
  /** Has the button got reduced padding. */
  isCompact: PropTypes.bool,
  /** Is the button disabled. */
  isDisabled: PropTypes.bool,
  /** Is the button in loading state. */
  isLoading: PropTypes.bool,
  /** Is the button positioned on the right hand side of its container. */
  isPositionedRight: PropTypes.bool,
  /** Has the button rounded borders. */
  isRounded: PropTypes.bool,
  /** Is the button secondary. */
  isSecondary: PropTypes.bool,
  /** The function to call when the button is clicked.
   *  @param {Object} event
   */
  onClick: PropTypes.func,
  /** The size of the button */
  size: PropTypes.string,
};
