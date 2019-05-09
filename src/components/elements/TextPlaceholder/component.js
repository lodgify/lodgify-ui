import 'semantic-ui-styles/text-placeholder.less';
import React from 'react';
import { PropTypes } from 'prop-types';
import getClassNames from 'classnames';

/**
 * A TextPlaceholder indicates that text content will soon appear in a layout.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ isFluid, length }) => (
  <div
    className={getClassNames('placeholder text', length, {
      fluid: isFluid,
    })}
  />
);

Component.displayName = 'TextPlaceholder';

Component.defaultProps = {
  isFluid: true,
  length: 'full',
};

Component.propTypes = {
  /** The placeholder fills the width of its parent. */
  isFluid: PropTypes.bool,
  /** The length of the lines in the placeholder. */
  length: PropTypes.oneOf(['short', 'medium', 'long', 'full']),
};
