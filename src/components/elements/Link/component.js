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
  willOpenInNewTab,
  href,
  onClick,
}) => (
  <Button
    as="a"
    basic
    href={href}
    target={willOpenInNewTab ? '_blank' : '_self'}
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
  willOpenInNewTab: false,
};

Component.propTypes = {
  /** The text to display on the link. */
  children: PropTypes.node.isRequired,
  /** The URL the link refers to. */
  href: PropTypes.string.isRequired,
  /** The function to call when the link is clicked
   *  @param {Object} event
   */
  onClick: PropTypes.func,
  /** Is the button positioned on the right hand side of its container. */
  isPositionedRight: PropTypes.bool,
  /** Is the referred resource to be opened in a new tab or the existing one. */
  willOpenInNewTab: PropTypes.bool,
};
