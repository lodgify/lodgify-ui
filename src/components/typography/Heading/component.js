import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getHeadingNumber } from './getHeadingNumber';

const SIZES = ['huge', 'large', 'medium', 'small'];

/**
 * A heading identifies a block of content.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ children, hasTextShadow, size }) => (
  <Header
    as={`h${getHeadingNumber(SIZES, size)}`}
    className={getClassNames({
      'has-text-shadow': hasTextShadow,
    })}
  >
    {children}
  </Header>
);

Component.displayName = 'Heading';

Component.defaultProps = {
  hasTextShadow: false,
  size: 'medium',
};

Component.propTypes = {
  /** The heading text. */
  children: PropTypes.string.isRequired,
  /** Does the heading have a text shadow */
  hasTextShadow: PropTypes.bool,
  /** The size of the heading. */
  size: PropTypes.oneOf(SIZES),
};
