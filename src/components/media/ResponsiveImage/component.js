import React, { Fragment, useState, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Image as SemanticImage } from 'semantic-ui-react';

import { IMAGE_TITLE } from 'utils/default-strings';
import { Paragraph } from 'typography/Paragraph';
import { BlockPlaceholder } from 'elements/BlockPlaceholder';
import { testidFactory } from 'utils/testid';

import { getIsFluid } from './utils/getIsFluid';
import { getAspectRatioPlaceholderMarkup } from './utils/getAspectRatioPlaceholderMarkup';

const TESTID_PREFIX = 'responsive-image';

const testid = testidFactory(TESTID_PREFIX);
/**
 * The standard widget for displaying an image.
 */
// eslint-disable-next-line jsdoc/require-jsdoc

export const Component = ({
  hasRoundedCorners,
  isCircular,
  isFluid,
  label,
  placeholderImageUrl,
  imageTitle,
  isAvatar,
  imageWidth,
  imageHeight,
  sizes,
  imageUrl,
  srcSet,
}) => {
  const [shouldImageLoad, setShouldImageLoad] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!!placeholderImageUrl) {
      const fullsizeImage = new Image();

      fullsizeImage.sizes = sizes;
      fullsizeImage.src = imageUrl;
      fullsizeImage.srcset = srcSet;
      setIsImageLoaded(fullsizeImage.complete);
    }
    setShouldImageLoad(true);
    setHasError(false);
  }, [placeholderImageUrl, imageUrl, srcSet, sizes]);
  const onError = () => {
    setHasError(true);
    setIsImageLoaded(false);
  };

  const onLoad = () => {
    setHasError(false);
    setIsImageLoaded(true);
  };

  return hasError ? (
    <BlockPlaceholder
      data-testid={testid('error-placeholder')}
      isFluid
      isRectangular
    />
  ) : (
    <figure
      className={classnames('responsive-image', {
        'has-blurred-children': !!placeholderImageUrl && !isImageLoaded,
        'has-placeholder': !!placeholderImageUrl,
        'is-fluid': isFluid,
        'is-rounded': hasRoundedCorners,
        'is-circular': isCircular,
      })}
      data-testid={testid()}
    >
      {shouldImageLoad && (
        <SemanticImage
          alt={imageTitle}
          avatar={isAvatar}
          data-testid={testid('img')}
          fluid={getIsFluid(isFluid, imageWidth, imageHeight)}
          onError={onError}
          onLoad={onLoad}
          sizes={sizes}
          src={imageUrl}
          srcSet={srcSet}
          title={imageTitle}
        />
      )}
      {!!placeholderImageUrl && (
        <Fragment>
          {getAspectRatioPlaceholderMarkup(imageWidth, imageHeight)}
          {!isImageLoaded && (
            <SemanticImage
              data-testid={testid('placeholder')}
              fluid={getIsFluid(isFluid, imageWidth, imageHeight)}
              src={placeholderImageUrl}
            />
          )}
        </Fragment>
      )}
      {label ? (
        <Paragraph data-testid={testid('label')}>{label}</Paragraph>
      ) : null}
    </figure>
  );
};

Component.displayName = 'ResponsiveImage';

Component.defaultProps = {
  hasRoundedCorners: false,
  imageHeight: null,
  imageTitle: IMAGE_TITLE,
  imageUrl: '',
  imageWidth: null,
  isAvatar: false,
  isCircular: false,
  isFluid: false,
  isLazyLoaded: true,
  label: null,
  placeholderImageUrl: undefined,
  sizes: null,
  srcSet: null,
};

Component.propTypes = {
  /** Is the image rounded on the corners. */
  hasRoundedCorners: PropTypes.bool,
  /** The natural height of the image. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Title of the image to show when hovering it on desktop browsers. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageTitle: PropTypes.string,
  /** URL pointing to the image to render. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageUrl: PropTypes.string,
  /** The natural width of the image. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether to render the image as an avatar. */
  // eslint-disable-next-line react/no-unused-prop-types
  isAvatar: PropTypes.bool,
  /** Is the image circular. */
  isCircular: PropTypes.bool,
  /** Whether to render fluidly the image or not. */
  // eslint-disable-next-line react/no-unused-prop-types
  isFluid: PropTypes.bool,
  /** The high resolution image will load when scrolled to the component's position. */
  // eslint-disable-next-line react/no-unused-prop-types
  isLazyLoaded: PropTypes.bool,
  /** A visible label for the image. */
  label: PropTypes.string,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  sizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  srcSet: PropTypes.string,
};
