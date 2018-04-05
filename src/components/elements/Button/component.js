import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon } from 'semantic-ui-react';

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
  hasShadow,
  icon,
  size,
}) => (
  <Button
    disabled={isDisabled}
    floated={isPositionedRight ? 'right' : 'left'}
    loading={isLoading}
    onClick={onClick}
    secondary={isSecondary}
    circular={isRounded}
    size={size}
    className={cx({
      'has-icon': !!icon,
      'has-shadow': !!hasShadow,
    })}
  >
    {!!icon && (
      <span className="icon">
        <Icon name={icon} />
      </span>
    )}
    {children}
  </Button>
);

Component.displayName = 'Button';

Component.defaultProps = {
  onClick: Function.prototype,
  isDisabled: false,
  isPositionedRight: false,
  isLoading: false,
  isRounded: false,
  isSecondary: false,
  hasShadow: false,
  icon: null,
  size: null,
};

Component.propTypes = {
  /** The text to display on the button. */
  children: PropTypes.node.isRequired,
  /** The function to call when the button is clicked.
   *  @param {Object} event
   */
  onClick: PropTypes.func,
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
  /** Has the button shadow. */
  hasShadow: PropTypes.bool,
  /** An icon to display in the button */
  icon: PropTypes.string,
  /** The size of the button */
  size: PropTypes.string,
};
