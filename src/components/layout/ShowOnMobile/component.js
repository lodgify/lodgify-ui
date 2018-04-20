import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

/**
 * ShowOnMobile is the Lodgify UI interface for the
 * Semantic UI Responsive.
 *
 * A ShowOnMobile component controls which elements are rendered on devices
 * with a screen width of 599px or less
 *
 * @returns {Object}
 */
export const Component = ({ parent, ...parentProps }) => (
  <Responsive as={parent} {...parentProps} maxWidth={599} />
);

Component.defaultProps = {
  parent: 'div',
  parentProps: null,
};

Component.displayName = 'ShowOnMobile';

Component.propTypes = {
  /** The parent component that will be rendered. */
  parent: PropTypes.node,
  /** The parents props */
  // eslint-disable-next-line
  parentProps: PropTypes.object,
};
