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
export const Component = ({ parent, ...parentProps }) => (
  <Responsive as={parent} {...parentProps} minWidth={600} />
);

Component.defaultProps = {
  parent: 'div',
  parentProps: null,
};

Component.displayName = 'ShowOnDesktop';

Component.propTypes = {
  /** The parent component that will be rendered. */
  parent: PropTypes.node,
  /** The parent props */
  // eslint-disable-next-line
  parentProps: PropTypes.object,
};
