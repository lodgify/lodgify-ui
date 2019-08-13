import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

/**
 * A link indicates a referred resource.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  href,
  isFluid,
  isPositionedRight,
  onClick,
  willOpenInNewTab,
}) => (
  <Button
    as={href && 'a'}
    basic
    floated={isPositionedRight ? 'right' : 'left'}
    fluid={isFluid}
    href={href}
    onClick={onClick}
    target={willOpenInNewTab ? '_blank' : '_self'}
    type="button"
  >
    {children}
  </Button>
);

Component.displayName = 'Link';

Component.defaultProps = {
  href: null,
  isFluid: false,
  isPositionedRight: false,
  onClick: Function.prototype,
  willOpenInNewTab: false,
};

Component.propTypes = {
  /** The text to display on the link. */
  children: PropTypes.node.isRequired,
  /** The URL the link refers to. */
  href: PropTypes.string,
  /** Does the link take up the width of it's container. */
  isFluid: PropTypes.bool,
  /** Is the link positioned on the right hand side of its container. */
  isPositionedRight: PropTypes.bool,
  /** The function to call when the link is clicked.
   *  @param {Object} event
   */
  onClick: PropTypes.func,
  /** Is the referred resource to be opened in a new tab or the existing one. */
  willOpenInNewTab: PropTypes.bool,
};
