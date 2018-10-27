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
  };

  handleImageLoad = () => this.setState({ isImageLoaded: true });

  render = () => {
    const {
      label,
      sources,
      placeholderImageUrl,
      imageUrl,
      isFluid,
    } = this.props;

    const imageProps = {
      ...this.props,
      isImageLoaded: this.state.isImageLoaded,
      handleImageLoad: this.handleImageLoad,
    };

    return (
      <picture
        className={getClassNames('responsive-image', {
          'is-fluid': isFluid,
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
  imageHeight: null,
  imageNotFoundLabelText: IMAGE_NOT_FOUND,
  imageTitle: IMAGE_TITLE,
  imageUrl: '',
  isAvatar: false,
  isFluid: true,
  label: null,
  placeholderImageUrl: undefined,
  sources: [],
  imageWidth: null,
};

Component.propTypes = {
  /** Alternative text to show if the image can't be loaded by the browser */
  // eslint-disable-next-line react/no-unused-prop-types
  alternativeText: PropTypes.string,
  /** The height of the image */
  // eslint-disable-next-line react/no-unused-prop-types
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The label text for the when the image is not found. */
  // eslint-disable-next-line react/no-unused-prop-types
  imageNotFoundLabelText: PropTypes.string,
  /** Title of the image to show when hovering it on desktop browsers */
  // eslint-disable-next-line react/no-unused-prop-types
  imageTitle: PropTypes.string,
  /** URL pointing to the image to render */
  // eslint-disable-next-line react/no-unused-prop-types
  imageUrl: PropTypes.string,
  /** The width of the image */
  // eslint-disable-next-line react/no-unused-prop-types
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether to render the image as an avatar */
  // eslint-disable-next-line react/no-unused-prop-types
  isAvatar: PropTypes.bool,
  /** Whether to render fluidly the image or not */
  // eslint-disable-next-line react/no-unused-prop-types
  isFluid: PropTypes.bool,
  /** A visible label for the image */
  label: PropTypes.string,
  /** URL pointing to the placeholder image to render */
  placeholderImageUrl: PropTypes.string,
  /** Collection of objects to specify different image sources
   *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string.isRequired,
      srcset: PropTypes.string.isRequired,
    })
  ),
};
