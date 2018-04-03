import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

/**
 * A link indicates a referred resource.
 * @return {Object}
 */
export const Component = ({
  children,
  isDisabled,
  isPositionedRight,
  mode,
  url,
}) => (
  <Button
    as="a"
    basic
    href={url}
    target={mode}
    disabled={isDisabled}
    floated={isPositionedRight ? 'right' : 'left'}
  >
    {children}
  </Button>
);

Component.displayName = 'Link';

Component.defaultProps = {
  isDisabled: false,
  isPositionedRight: false,
  mode: '_self',
};

Component.propTypes = {
  /** The text to display on the button. */
  children: PropTypes.node.isRequired,
  /** The URL the link refers to. */
  url: PropTypes.string.isRequired,
  /** Is the button disabled. */
  isDisabled: PropTypes.bool,
  /** Is the button positioned on the right hand side of its container. */
  isPositionedRight: PropTypes.bool,
  /** Is the resource refered going to be open in a new tab or the existing one. */
  mode: PropTypes.oneOf(['_self', '_blank']),
};
