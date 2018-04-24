import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import { Paragraph } from 'typography/Paragraph';
import { getBackgroundImageUrl } from 'lib/get-background-image-url';
/**
 * The standard element for displaying a thumbnail.
 * @returns {Object}
 */
export const Component = ({
  alternativeText,
  imageUrl,
  isCircular,
  isSquare,
  label,
  size,
}) => (
  <div className="ui thumbnail">
    <div
      className={getClassNames('ui', 'image', size, {
        circular: !!isCircular,
        square: !!isSquare,
      })}
      style={{ backgroundImage: getBackgroundImageUrl(imageUrl) }}
    >
      <span role="img" aria-label={alternativeText} />
    </div>
    {label ? <Paragraph>{label}</Paragraph> : null}
  </div>
);

Component.displayName = 'Thumbnail';

Component.defaultProps = {
  alternativeText: 'Thumbnail element',
  isCircular: false,
  isSquare: false,
  label: null,
  size: null,
};

Component.propTypes = {
  /** Alternative text to show if the image can't be loaded by the browser */
  alternativeText: PropTypes.string,
  /** URL pointing to the image to render */
  imageUrl: PropTypes.string.isRequired,
  /** Whether to render a circular image */
  isCircular: PropTypes.bool,
  /** Whether to render a square image */
  isSquare: PropTypes.bool,
  /** A visible label for the image */
  label: PropTypes.string,
  /** The size of the thumbnail */
  size: PropTypes.oneOf(['small', 'large']),
};
