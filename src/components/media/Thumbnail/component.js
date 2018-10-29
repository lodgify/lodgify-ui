import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import { ResponsiveImage } from 'media/ResponsiveImage';

/**
 * A thumbnail displays a small image.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  alternativeText,
  className,
  hasRoundedCorners,
  imageUrl,
  isCircular,
  isSquare,
  label,
  placeholderImageUrl,
  size,
}) => (
  <div
    className={getClassNames('ui', 'thumbnail', className, size, {
      'proportional-width-and-height': isSquare || isCircular,
    })}
  >
    <ResponsiveImage
      alternativeText={alternativeText}
      hasRoundedCorners={hasRoundedCorners}
      imageUrl={imageUrl}
      isCircular={isCircular}
      label={label}
      placeholderImageUrl={placeholderImageUrl}
    />
  </div>
);

Component.displayName = 'Thumbnail';

Component.defaultProps = {
  alternativeText: 'Thumbnail element',
  className: '',
  isCircular: undefined,
  hasRoundedCorners: undefined,
  isSquare: false,
  label: null,
  placeholderImageUrl: null,
  size: null,
};

Component.propTypes = {
  /** Text to help visually impaired users understand the content of the image. */
  alternativeText: PropTypes.string,
  /**
   * Custom class name.
   * Provided by `ShowOnMobile` and `ShowOnDesktop` so ignored in the styleguide.
   * @ignore
   */
  className: PropTypes.string,
  /** Is the thumbnail rounded on the corners */
  hasRoundedCorners: PropTypes.bool,
  /** URL pointing to the image to render */
  imageUrl: PropTypes.string.isRequired,
  /** Is the thumbnail circular */
  isCircular: PropTypes.bool,
  /** Is the thumbnail square */
  isSquare: PropTypes.bool,
  /** A visible label for the thumbnail */
  label: PropTypes.string,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** The size of the thumbnail */
  size: PropTypes.oneOf(['small', 'large', 'huge']),
};
