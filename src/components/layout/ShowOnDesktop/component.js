import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

/**
 * ShowOnDesktop is the Lodgify UI interface for the
 * Semantic UI Responsive component.
 *
 * A ShowOnDesktop component controls which elements are rendered on devices
 * with a screen width of 600px or more
 *
 * @returns {Object}
 */
export const Component = ({ children, parent, parentProps }) => (
  <Responsive as={parent} {...parentProps} minWidth={600}>
    {children}
  </Responsive>
);

Component.defaultProps = {
  parent: 'div',
  parentProps: null,
  children: null,
};

Component.displayName = 'ShowOnDesktop';

Component.propTypes = {
  /** The child components only to be rendered on desktop  */
  children: PropTypes.node,
  /** The parent component that will be rendered. */
  parent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** The props to be passed to the parent component. */
  // eslint-disable-next-line
  parentProps: PropTypes.object,
};
