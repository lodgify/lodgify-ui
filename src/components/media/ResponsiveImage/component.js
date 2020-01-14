import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { bool, string } from 'prop-types';
import { Image as SemanticImage } from 'semantic-ui-react';

import { ImagePlaceholder } from 'media/ImagePlaceholder';
import { IMAGE_TITLE } from 'utils/default-strings';
import { Paragraph } from 'typography/Paragraph';
import { testidFactory } from 'utils/testid';

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
  sizes,
  imageUrl,
  srcSet,
  willFill,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [imageUrl, placeholderImageUrl]);

  const onError = () => {
    setIsError(true);
    setIsLoaded(false);
  };

  const onLoad = () => {
    setIsError(false);
    setIsLoaded(true);
  };

  const style = {
    backgroundImage: isError || isLoaded ? '' : `url(${placeholderImageUrl})`,
  };

  return (
    <figure
      alt={imageTitle}
      className={classnames('responsive-image', {
        isLoaded: isLoaded || isError,
        isCircular,
        willFill,
      })}
      data-testid={testid()}
      style={style}
    >
      {isError && (
        <ImagePlaceholder data-testid={testid('error-placeholder')} willFill />
      )}
      <SemanticImage
        avatar={isAvatar}
        circular={isCircular}
        data-testid={testid('img')}
        fluid={isFluid}
        onError={onError}
        onLoad={onLoad}
        rounded={hasRoundedCorners}
        sizes={sizes}
        src={imageUrl}
        srcSet={srcSet}
        title={!isError ? imageTitle : ''}
      />
      {label ? (
        <Paragraph data-testid={testid('label')}>{label}</Paragraph>
      ) : null}
    </figure>
  );
};
/*const _Component = ({}) => {
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

  return (
    <figure
      className={}
      data-testid={testid()}
    >
      {hasError ? (
        <ImagePlaceholder data-testid={testid('error-placeholder')} />
      ) : (
        shouldImageLoad && (
          <Fragment>
            <SemanticImage
              alt={imageTitle}
              avatar={isAvatar}
              data-testid={testid('img')}
              fluid={isFluid}
              onError={onError}
              onLoad={onLoad}
              sizes={sizes}
              src={imageUrl}
              srcSet={srcSet}
              title={imageTitle}
            />
          </Fragment>
        )
      )}
      
    </figure>
  );
};*/

Component.displayName = 'ResponsiveImage';

Component.defaultProps = {
  hasRoundedCorners: false,
  imageTitle: IMAGE_TITLE,
  imageUrl: '',
  isAvatar: false,
  isCircular: false,
  willFill: false,
  isFluid: false,
  isLazyLoaded: true,
  label: null,
  placeholderImageUrl: undefined,
  sizes: null,
  srcSet: null,
};

Component.propTypes = {
  /** Is the image rounded on the corners. */
  hasRoundedCorners: bool,
  /** Title of the image to show when hovering it on desktop browsers. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageTitle: string,
  /** URL pointing to the image to render. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageUrl: string,
  /** Whether to render the image as an avatar. */
  // eslint-disable-next-line react/no-unused-prop-types
  isAvatar: bool,
  /** Is the image circular. */
  isCircular: bool,
  /** Whether to render fluidly the image or not. */
  // eslint-disable-next-line react/no-unused-prop-types
  isFluid: bool,
  /** The high resolution image will load when scrolled to the component's position. */
  // eslint-disable-next-line react/no-unused-prop-types
  isLazyLoaded: bool,
  /** A visible label for the image. */
  label: string,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: string,
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  sizes: string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  srcSet: string,
  /** Whether to render the image that fill the container. */
  willFill: bool,
};
