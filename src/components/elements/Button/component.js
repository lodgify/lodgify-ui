import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

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
}) => (
  <Button
    disabled={isDisabled}
    floated={isPositionedRight ? 'right' : 'left'}
    loading={isLoading}
    onClick={onClick}
  >
    {children}
  </Button>
);

Component.displayName = 'Button';

Component.defaultProps = {
  onClick: Function.prototype,
  isDisabled: false,
  isPositionedRight: false,
  isLoading: false,
};

Component.propTypes = {
  /** The text to display on the button. */
  children: PropTypes.node.isRequired,
  /** The function to call when the link is tap
   *  @param {Object} event
   */
  onClick: PropTypes.func,
  /** Is the button disabled. */
  isDisabled: PropTypes.bool,
  /** Is the button in loading state. */
  isLoading: PropTypes.bool,
  /** Is the button positioned on the right hand side of its container. */
  isPositionedRight: PropTypes.bool,
};
