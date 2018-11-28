import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import { ResponsiveImage } from 'media/ResponsiveImage';
import { Paragraph } from 'typography/Paragraph';

/**
 * A thumbnail displays a small image.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  className,
  hasRoundedCorners,
  imageAlternativeText,
  imageSizes,
  imageSrcSet,
  imageUrl,
  isCircular,
  isSquare,
  label,
  size,
}) => (
  <div
    className={getClassNames('ui', 'thumbnail', size, className, {
      'is-square': isSquare,
      'is-circular': isCircular,
    })}
  >
    <ResponsiveImage
      alternativeText={imageAlternativeText}
      hasRoundedCorners={hasRoundedCorners}
      imageUrl={imageUrl}
      isCircular={isCircular}
      isSquare={isSquare}
      sizes={imageSizes}
      srcSet={imageSrcSet}
    />
    {!!label && <Paragraph>{label}</Paragraph>}
  </div>
);

Component.displayName = 'Thumbnail';

Component.defaultProps = {
  className: '',
  hasRoundedCorners: false,
  imageAlternativeText: undefined,
  imageSizes: undefined,
  imageSrcSet: undefined,
  isCircular: false,
  isSquare: false,
  label: null,
  size: null,
};

Component.propTypes = {
  /**
   * Custom class name.
   * Provided by `ShowOnMobile` and `ShowOnDesktop` so ignored in the styleguide.
   * @ignore
   */
  className: PropTypes.string,
  /** Is the thumbnail rounded on the corners */
  hasRoundedCorners: PropTypes.bool,
  /** Text to help visually impaired users understand the content of the image. */
  imageAlternativeText: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSrcSet: PropTypes.string,
  /** URL pointing to the image to render. */
  imageUrl: PropTypes.string.isRequired,
  /** Is the thumbnail circular */
  isCircular: PropTypes.bool,
  /** Is the thumbnail square */
  isSquare: PropTypes.bool,
  /** A visible label for the thumbnail */
  label: PropTypes.string,
  /** The size of the thumbnail */
  size: PropTypes.oneOf(['small', 'large', 'huge']),
};
