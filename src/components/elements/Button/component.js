import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isString } from 'lodash';
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
    secondary={isSecondary}
    circular={isRounded}
    size={size}
    className={cx({
      'has-icon': !!icon,
      'has-shadow': !!hasShadow,
    })}
  >
    {!icon ? null : (
      <div className="icon">
        {React.isValidElement(icon) ? <div className="icon">{icon}</div> : null}
        {isString(icon) ? <Icon name={icon} /> : null}
      </div>
    )}
    {children}
  </Button>
);

Component.displayName = 'Button';

Component.defaultProps = {
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
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The size of the button */
  size: PropTypes.string,
};
