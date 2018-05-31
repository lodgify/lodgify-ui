import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import { Paragraph } from 'typography/Paragraph';

import { getPath } from './utils/getPath';

/**
 * An icon is a glyph used to represent something else.
 * @return {Object}
 */
export const Component = ({
  color,
  isCircular,
  isColorInverted,
  isDisabled,
  label,
  name,
  path,
  size,
  ...otherProps
}) => (
  <i
    className={getClassNames('icon', color, size, {
      circular: isCircular,
      'inverted grey': isDisabled,
      inverted: isColorInverted,
    })}
    // Passing through props is required for
    // compatibility with dynamic components e.g. `ToolTip`
    {...otherProps}
  >
    <svg viewBox="0 0 24 24">
      <path d={getPath(name, path)} fill="currentColor" />
    </svg>
    {!!label && <Paragraph>{label}</Paragraph>}
  </i>
);

Component.displayName = 'Icon';

Component.defaultProps = {
  color: null,
  isCircular: false,
  isColorInverted: false,
  isDisabled: false,
  label: null,
  name: null,
  path: null,
  size: null,
};

Component.propTypes = {
  /** The color of the icon. */
  color: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
  ]),
  /** Is the icon formatted to appear circular  */
  isCircular: PropTypes.bool,
  /** Is the color of the icon inverted for contrast */
  isColorInverted: PropTypes.bool,
  /** Is the icon disabled. */
  isDisabled: PropTypes.bool,
  /** A visible label to display with the icon. */
  label: PropTypes.string,
  /** The name of the icon to display. Takes priority over `props.path`. */
  name: PropTypes.oneOf([
    'arrow down',
    'arrow left',
    'arrow right',
    'arrow up',
    'bathroom',
    'bedroom door',
    'bus',
    'calendar',
    'caret down',
    'caret left',
    'caret right',
    'caret up',
    'check in',
    'check out',
    'checkmark',
    'chevron left',
    'chevron right',
    'clock',
    'close',
    'coffee',
    'double bed',
    'fire',
    'guests',
    'home',
    'info',
    'leaf',
    'location',
    'map pin',
    'paw',
    'phone',
    'placeholder',
    'plane',
    'question mark',
    'road',
    'search',
    'single bed',
    'star',
    'sun',
    'train',
    'users',
    'wheelchair',
  ]),
  /**
   * A string containing a series of path descriptions. Should fit a 24x24 viewBox.
   * [See MDN for documentation.](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)
   */
  path: PropTypes.string,
  /** The size of the icon. */
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive',
  ]),
};
