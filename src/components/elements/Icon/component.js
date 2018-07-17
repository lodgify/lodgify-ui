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
  isLabelLeft,
  labelText,
  labelWeight,
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
    {!!labelText &&
      isLabelLeft && <Paragraph weight={labelWeight}>{labelText}</Paragraph>}
    <svg viewBox="0 0 24 24">
      <path d={getPath(name, path)} fill="currentColor" />
    </svg>
    {!!labelText &&
      !isLabelLeft && <Paragraph weight={labelWeight}>{labelText}</Paragraph>}
  </i>
);

Component.displayName = 'Icon';

Component.defaultProps = {
  color: null,
  isCircular: false,
  isColorInverted: false,
  isDisabled: false,
  isLabelLeft: false,
  labelText: null,
  labelWeight: null,
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
    'light grey',
    'black',
  ]),
  /** Is the icon formatted to appear circular  */
  isCircular: PropTypes.bool,
  /** Is the color of the icon inverted for contrast */
  isColorInverted: PropTypes.bool,
  /** Is the icon disabled. */
  isDisabled: PropTypes.bool,
  /** Is the label on the left hand side of the icon */
  isLabelLeft: PropTypes.bool,
  /** A visible label to display with the icon. */
  labelText: PropTypes.string,
  /** The weight of the label. */
  labelWeight: PropTypes.oneOf(['heavy', 'light']),
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
    'facebook',
    'fire',
    'google',
    'guests',
    'home',
    'info',
    'instagram',
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
    'square',
    'sun',
    'train',
    'twitter',
    'users',
    'wheelchair',
    'youtube',
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
