import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

/**
 * A link indicates a referred resource.
 * @return {Object}
 */
export const Component = ({
  children,
  isPositionedRight,
  mode,
  url,
  onClick,
}) => (
  <Button
    as="a"
    basic
    href={url}
    target={mode}
    floated={isPositionedRight ? 'right' : 'left'}
    onClick={onClick}
  >
    {children}
  </Button>
);

Component.displayName = 'Link';

Component.defaultProps = {
  onClick: Function.prototype,
  isPositionedRight: false,
  mode: '_self',
};

Component.propTypes = {
  /** The text to display on the button. */
  children: PropTypes.node.isRequired,
  /** The URL the link refers to. */
  url: PropTypes.string.isRequired,
  /** The function to call when the link is tap
   *  @param {Object} event
   */
  onClick: PropTypes.func,
  /** Is the button positioned on the right hand side of its container. */
  isPositionedRight: PropTypes.bool,
  /** Is the resource refered going to be open in a new tab or the existing one. */
  mode: PropTypes.oneOf(['_self', '_blank']),
};
