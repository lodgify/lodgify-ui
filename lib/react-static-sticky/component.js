import React from 'react';
import PropTypes from 'prop-types';

/**
 * The standard component for stacking children statically - without listening scroll events
 * @returns {Object}
 */
export const Component = ({
  children,
  isRelativeSticky,
  willStickToBottom,
  styles,
}) => (
  <div
    style={{
      position: 'relative',
      display: 'inline-block',
      height: '100%',
      width: '100%',
      ...styles,
    }}
  >
    <div
      style={{
        position: !isRelativeSticky ? 'fixed' : 'absolute',
        bottom: willStickToBottom ? 0 : 'initial',
        top: willStickToBottom ? 'initial' : 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '0 2em',
      }}
    >
      {children}
    </div>
  </div>
);

Component.displayName = 'StaticSticky';

Component.defaultProps = {
  children: null,
  isRelativeSticky: false,
  willStickToBottom: false,
  styles: {},
};

Component.propTypes = {
  /** The children to render. */
  children: PropTypes.node,
  /** Is the children going to be render in relative sticky mode. */
  isRelativeSticky: PropTypes.bool,
  willStickToBottom: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  styles: PropTypes.object,
};
