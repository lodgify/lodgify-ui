import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';

import { getIsSizeLarge } from './utils/getIsSizeLarge';

/**
 * A divider adds whitespace between other elements.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ hasLine, size }) => (
  <Divider hidden={!hasLine} section={getIsSizeLarge(size)} />
);

Component.displayName = 'Divider';

Component.defaultProps = {
  hasLine: false,
  size: 'medium',
};

Component.propTypes = {
  /** Does the divider have a visible line. */
  hasLine: PropTypes.bool,
  /** The size of the divider. */
  size: PropTypes.oneOf(['medium', 'large']),
};
