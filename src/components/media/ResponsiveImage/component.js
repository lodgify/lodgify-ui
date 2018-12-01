import React, { PureComponent } from 'react';
import getClassNames from 'classnames';
import PropTypes from 'prop-types';

import {
  IMAGE_NOT_FOUND,
  IMAGE_TITLE,
  IMAGE_WIDGET,
} from 'utils/default-strings';
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
    shouldImageLoad: false,
  };

  componentDidMount = () => {
    const { imageUrl, placeholderImageUrl, sizes, srcSet } = this.props;

    if (!!placeholderImageUrl) {
      const fullsizeImage = new Image();

      fullsizeImage.sizes = sizes;
      fullsizeImage.src = imageUrl;
      fullsizeImage.srcset = srcSet;

      this.setState({
        shouldImageLoad: true,
        isImageLoaded: fullsizeImage.complete,
      });

      return;
    }

    this.setState({ shouldImageLoad: true });
  };

  handleImageLoad = () => this.setState({ isImageLoaded: true });

  render = () => {
    const {
      hasRoundedCorners,
      isCircular,
      isFluid,
      label,
      placeholderImageUrl,
    } = this.props;
    const { isImageLoaded, shouldImageLoad } = this.state;

    return (
      <figure
        className={getClassNames('responsive-image', {
          'has-blurred-children': !!placeholderImageUrl && !isImageLoaded,
          'has-placeholder': !!placeholderImageUrl,
          'is-fluid': isFluid,
          'is-rounded': hasRoundedCorners,
          'is-circular': isCircular,
        })}
      >
        {shouldImageLoad && getImageMarkup(this.props, this.handleImageLoad)}
        {!!placeholderImageUrl &&
          getPlaceholderImageMarkup(this.props, isImageLoaded)}
        {label ? <Paragraph>{label}</Paragraph> : null}
      </figure>
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
  sizes: null,
  srcSet: null,
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
  /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  sizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  srcSet: PropTypes.string,
};
