import 'semantic-ui-styles/header.less';
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
export const Component = ({
  children,
  className,
  hasMargin,
  isColorInverted,
  size,
  textAlign,
}) => (
  <Header
    as={`h${getHeadingNumber(SIZES, size)}`}
    className={getClassNames(className, { 'has-no-margin': !hasMargin })}
    inverted={isColorInverted}
    textAlign={textAlign}
  >
    {children}
  </Header>
);

Component.displayName = 'Heading';

Component.defaultProps = {
  className: null,
  hasMargin: true,
  isColorInverted: false,
  textAlign: null,
  size: 'medium',
};

Component.propTypes = {
  /** The heading text. */
  children: PropTypes.string.isRequired,
  /**
   * Custom class name.
   * Provided by `ShowOn` so ignored in the styleguide.
   * @ignore
   */
  className: PropTypes.string,
  /** Does the heading have a margin. */
  hasMargin: PropTypes.bool,
  /** Is the color of the heading inverted for contrast. */
  isColorInverted: PropTypes.bool,
  /** The size of the heading. */
  size: PropTypes.oneOf(SIZES),
  /** The alignment of the heading text. */
  textAlign: PropTypes.oneOf(['left', 'right', 'justified', 'center']),
};
