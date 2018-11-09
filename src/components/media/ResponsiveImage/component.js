import React, { PureComponent } from 'react';
import getClassNames from 'classnames';
import PropTypes from 'prop-types';

import {
  IMAGE_NOT_FOUND,
  IMAGE_TITLE,
  IMAGE_WIDGET,
} from 'utils/default-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Paragraph } from 'typography/Paragraph';

import { getImageMarkup } from './utils/getImageMarkup';
import { getPlaceholderImageMarkup } from './utils/getPlaceholderImageMarkup';

/**
 * The standard widget for displaying an image.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isImageLoaded: false,
    isImageLoadedFromCache: false,
    shouldImageLoad: false,
  };

  componentDidMount = () => {
    const { imageUrl, placeholderImageUrl } = this.props;

    if (!!placeholderImageUrl && !!imageUrl) {
      const fullsizeImage = new Image();

      fullsizeImage.src = imageUrl;

      this.setState({
        shouldImageLoad: true,
        isImageLoadedFromCache: fullsizeImage.complete,
      });
    } else {
      this.setState({ shouldImageLoad: true });
    }
  };

  handleImageLoad = () => this.setState({ isImageLoaded: true });

  render = () => {
    const {
      label,
      sources,
      placeholderImageUrl,
      imageUrl,
      isFluid,
      hasRoundedCorners,
      isCircular,
    } = this.props;

    const imageProps = {
      ...this.props,
      handleImageLoad: this.handleImageLoad,
      isImageLoaded: this.state.isImageLoaded,
      isImageLoadedFromCache: this.state.isImageLoadedFromCache,
      shouldImageLoad: this.state.shouldImageLoad,
    };

    return (
      <picture
        className={getClassNames('responsive-image', {
          'is-fluid': isFluid,
          'is-rounded': hasRoundedCorners,
          'is-circular': isCircular,
        })}
        role="figure"
      >
        {sources.map(({ srcset, media }, index) => (
          <source
            key={buildKeyFromStrings(srcset, index)}
            media={media}
            srcSet={srcset}
          />
        ))}
        {!!placeholderImageUrl && !!imageUrl
          ? getPlaceholderImageMarkup(imageProps)
          : getImageMarkup(imageProps)}
        {label ? <Paragraph>{label}</Paragraph> : null}
      </picture>
    );
  };
}

Component.displayName = 'ResponsiveImage';

Component.defaultProps = {
  alternativeText: IMAGE_WIDGET,
  hasRoundedCorners: false,
  imageHeight: null,
  imageNotFoundLabelText: IMAGE_NOT_FOUND,
  imageTitle: IMAGE_TITLE,
  imageUrl: '',
  imageWidth: null,
  isAvatar: false,
  isCircular: false,
  isFluid: false,
  label: null,
  placeholderImageUrl: undefined,
  sources: [],
};

Component.propTypes = {
  /** Alternative text to show if the image can't be loaded by the browser. */
  // eslint-disable-next-line react/no-unused-prop-types
  alternativeText: PropTypes.string,
  /** Is the image rounded on the corners. */
  hasRoundedCorners: PropTypes.bool,
  /** The natural height of the image. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The label text for the when the image is not found. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageNotFoundLabelText: PropTypes.string,
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
  /** A visible label for the image. */
  label: PropTypes.string,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** Collection of objects to specify different image sources.
   *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string.isRequired,
      srcset: PropTypes.string.isRequired,
    })
  ),
};
