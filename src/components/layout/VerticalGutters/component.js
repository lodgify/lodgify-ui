import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Divider } from 'elements/Divider';

/**
 * VerticalGutters wraps child components with vertical gutters on the top and bottom.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children }) => (
  <Fragment>
    <Divider size="large" />
    {children}
    <Divider size="large" />
  </Fragment>
);

Component.displayName = 'VerticalGutters';

Component.propTypes = {
  /** The child node to be wrapped with vertical gutters */
  children: PropTypes.node.isRequired,
};
