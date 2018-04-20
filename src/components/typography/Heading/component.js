import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import { getHeadingNumber } from './getHeadingNumber';

const SIZES = ['huge', 'large', 'medium', 'small'];

/**
 * A heading provides a short summary of content.
 * @return {Object}
 */
export const Component = ({ children, size }) => (
  <Header as={`h${getHeadingNumber(SIZES, size)}`}>{children}</Header>
);

Component.displayName = 'Heading';

Component.defaultProps = {
  size: 'medium',
};

Component.propTypes = {
  /** The heading text. */
  children: PropTypes.string.isRequired,
  /** The size of the heading. */
  size: PropTypes.oneOf(SIZES),
};
