import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

/**
 * A button indicates a possible user action.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  hasShadow,
  icon,
  isCompact,
  isDisabled,
  isFluid,
  isFormSubmit,
  isLoading,
  isOutlined,
  isPositionedRight,
  isRounded,
  isSecondary,
  onClick,
  size,
}) => (
  <Button
    basic={isOutlined}
    circular={isRounded}
    className={cx({
      'has-shadow': !!hasShadow,
      'has-outline': !!isOutlined,
    })}
    compact={isCompact}
    disabled={isDisabled}
    floated={isPositionedRight ? 'right' : 'left'}
    fluid={isFluid}
    loading={isLoading}
    onClick={onClick}
    secondary={isSecondary}
    size={size}
    type={isFormSubmit ? 'submit' : 'button'}
  >
    {!!icon && <Icon name={icon} />}
    {children}
  </Button>
);

Component.displayName = 'Button';

Component.defaultProps = {
  children: null,
  hasShadow: false,
  icon: null,
  isCompact: false,
  isDisabled: false,
  isFluid: false,
  isFormSubmit: false,
  isLoading: false,
  isOutlined: false,
  isPositionedRight: false,
  isRounded: false,
  isSecondary: false,
  onClick: Function.prototype,
  size: null,
};

Component.propTypes = {
  /** The content to display in the button. */
  children: PropTypes.node,
  /** Has the button shadow. */
  hasShadow: PropTypes.bool,
  /** An icon to display in the button
   * [See here for the full list of valid icon names](https://github.com/lodgify/lodgify-ui/blob/master/src/components/elements/Icon/constants.js)
   */
  icon: PropTypes.string,
  /** Has the button got reduced padding. */
  isCompact: PropTypes.bool,
  /** Is the button disabled. */
  isDisabled: PropTypes.bool,
  /** Does the button fill the width of its container. */
  isFluid: PropTypes.bool,
  /** Is the button for submitting the form in which it is rendered. */
  isFormSubmit: PropTypes.bool,
  /** Is the button in loading state. */
  isLoading: PropTypes.bool,
  /** Is the button outlined. */
  isOutlined: PropTypes.bool,
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
