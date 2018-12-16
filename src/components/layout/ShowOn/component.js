import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

/**
 * Shows child components on specified screen sizes.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  computer,
  mobile,
  parent,
  parentProps,
  tablet,
  widescreen,
}) =>
  React.createElement(
    parent,
    {
      ...parentProps,
      className: getClassNames(parentProps.className, {
        'show-on-mobile': mobile,
        'show-on-tablet': tablet,
        'show-on-computer': computer,
        'show-on-widescreen': widescreen,
      }),
    },
    children
  );

Component.defaultProps = {
  children: null,
  computer: false,
  mobile: false,
  parent: 'div',
  parentProps: {},
  tablet: false,
  widescreen: false,
};

Component.displayName = 'ShowOn';

Component.propTypes = {
  /** The child components only to be rendered on the selected devices */
  children: PropTypes.node,
  /** Are the child components showing on computer */
  // eslint-disable-next-line react/boolean-prop-naming
  computer: PropTypes.bool,
  /** Are the child components showing on mobile */
  // eslint-disable-next-line react/boolean-prop-naming
  mobile: PropTypes.bool,
  /** The parent component that will be rendered. */
  parent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The props to be passed to the parent component. */
  // eslint-disable-next-line react/forbid-prop-types
  parentProps: PropTypes.object,
  /** Are the child components showing on tablet */
  // eslint-disable-next-line react/boolean-prop-naming
  tablet: PropTypes.bool,
  /** Are the child components showing on widescreen */
  // eslint-disable-next-line react/boolean-prop-naming
  widescreen: PropTypes.bool,
};
