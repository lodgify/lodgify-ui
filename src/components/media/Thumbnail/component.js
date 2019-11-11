import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ResponsiveImage } from 'media/ResponsiveImage';
import { Paragraph } from 'typography/Paragraph';

/**
 * A thumbnail displays a small image.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  className,
  hasMargin,
  hasRoundedCorners,
  imageSizes,
  imageSrcSet,
  imageTitle,
  imageUrl,
  isCircular,
  isSquare,
  label,
  placeholderImageUrl,
  size,
}) => (
  <Fragment>
    <div
      className={classnames('ui', 'thumbnail', size, className, {
        'has-margin': hasMargin,
        'is-square': isSquare,
        'is-circular': isCircular,
      })}
    >
      <ResponsiveImage
        hasRoundedCorners={hasRoundedCorners}
        imageTitle={imageTitle || label || undefined}
        imageUrl={imageUrl}
        isCircular={isCircular}
        isFluid={!isSquare}
        isLazyLoaded
        isSquare={isSquare}
        placeholderImageUrl={placeholderImageUrl}
        sizes={imageSizes}
        srcSet={imageSrcSet}
      />
    </div>
    {!!label && <Paragraph>{label}</Paragraph>}
  </Fragment>
);

Component.displayName = 'Thumbnail';

Component.defaultProps = {
  className: '',
  hasMargin: false,
  hasRoundedCorners: false,
  imageSizes: undefined,
  imageSrcSet: undefined,
  imageTitle: undefined,
  isCircular: false,
  isSquare: false,
  label: null,
  placeholderImageUrl: undefined,
  size: null,
};

Component.propTypes = {
  /**
   * Custom class name.
   * Provided by `ShowOn` so ignored in the styleguide.
   * @ignore
   */
  className: PropTypes.string,
  /** Does the thumbnail have a margin to separate it visually from siblings. */
  hasMargin: PropTypes.bool,
  /** Is the thumbnail rounded on the corners */
  hasRoundedCorners: PropTypes.bool,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  imageSrcSet: PropTypes.string,
  /** The title of the thumbnail */
  imageTitle: PropTypes.string,
  /** URL pointing to the image to render. */
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
};
