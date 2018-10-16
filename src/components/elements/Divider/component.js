import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getIsSizeLarge } from './utils/getIsSizeLarge';

/**
 * A divider adds whitespace between other elements.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ className, hasLine, size }) => (
  <Divider
    className={getClassNames(className, {
      'is-size-small': size === 'small',
    })}
    hidden={!hasLine}
    section={getIsSizeLarge(size)}
  />
);

Component.displayName = 'Divider';

Component.defaultProps = {
  className: '',
  hasLine: false,
  size: 'medium',
};

Component.propTypes = {
  /** Custom class name string to customize the resulting divider. */
  className: PropTypes.string,
  /** Does the divider have a visible line. */
  hasLine: PropTypes.bool,
  /** The size of the divider. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
