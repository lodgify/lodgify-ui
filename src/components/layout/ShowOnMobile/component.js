import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

/**
 * ShowOnMobile is the Lodgify UI interface for the
 * Semantic UI Responsive component.
 *
 * A ShowOnMobile component controls which elements are rendered on devices
 * with a screen width of 599px or less
 *
 * @returns {Object}
 */
export const Component = ({ children, parent, parentProps }) => (
  <Responsive as={parent} {...parentProps} maxWidth={599}>
    {children}
  </Responsive>
);

Component.defaultProps = {
  parent: 'div',
  parentProps: null,
  children: null,
};

Component.displayName = 'ShowOnMobile';

Component.propTypes = {
  /** The child components only to be rendered on mobile  */
  children: PropTypes.node,
  /** The parent component that will be rendered. */
  parent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** The props to be passed to the parent component. */
  // eslint-disable-next-line react/forbid-prop-types
  parentProps: PropTypes.object,
};
