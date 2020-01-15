import React, { Fragment, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import get from 'get-value';
import classnames from 'classnames';

import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { ResponsiveImage } from 'media/ResponsiveImage';
import { ICON_NAMES } from 'elements/Icon';
import { testidFactory } from 'utils/testid';

import { adaptImages } from './utils/adaptImages';
import { renderNavButton } from './utils/renderNavButton';

const TEST_ID_PREFIX = 'slideshow';

const testid = testidFactory(TEST_ID_PREFIX);

/**
 * A slideshow displays a series of images.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  className,
  hasShadow,
  headingText,
  images,
  isRounded,
  isShowingBulletNavigation,
  isShowingIndex,
  isShowingThumbnails,
  isStretched,
  isFluid,
  startIndex,
  willFill,
}) => {
  const [index, setIndex] = useState(startIndex);
  const onSlide = index => {
    setIndex(index);
  };
  const adaptedImages = useMemo(() => adaptImages(images), [images]);
  const descriptionText = get(images, [index, 'descriptionText']);

  return (
    <Fragment>
      {headingText && <Heading>{headingText}</Heading>}
      {descriptionText && (
        <Paragraph>
          <span data-testid={testid('description')}>{descriptionText}</span>
        </Paragraph>
      )}
      <ImageGallery
        additionalClass={classnames(className, {
          'fit-height': isStretched,
          'fit-width': isFluid,
          'no-shadow': !hasShadow,
          'no-border-radius': !isRounded,
        })}
        data-testid={testid()}
        items={adaptedImages}
        lazyLoad
        onSlide={onSlide}
        renderItem={item => (
          <ResponsiveImage
            imageUrl={item.original}
            placeholderImageUrl={item.placeholder}
            sizes={item.sizes}
            srcSet={item.srcSet}
            willFill={willFill}
          />
        )}
        renderLeftNav={renderNavButton(ICON_NAMES.CHEVRON_LEFT)}
        renderRightNav={renderNavButton(ICON_NAMES.CHEVRON_RIGHT)}
        showBullets={isShowingBulletNavigation}
        showFullscreenButton={false}
        showIndex={isShowingIndex}
        showPlayButton={false}
        showThumbnails={isShowingThumbnails}
        startIndex={startIndex}
        thumbnails={adaptedImages}
      />
    </Fragment>
  );
};

Component.displayName = 'Slideshow';

Component.defaultProps = {
  className: null,
  hasShadow: true,
  headingText: null,
  isRounded: true,
  isShowingBulletNavigation: true,
  isStretched: false,
  isShowingIndex: false,
  isShowingThumbnails: false,
  isFluid: false,
  startIndex: 0,
  willFill: false,
};

Component.propTypes = {
  /** Custom className for the slideshow. */
  className: PropTypes.string,
  /** Has the slideshow got a drop shadow. */
  hasShadow: PropTypes.bool,
  /** The text to display as a heading at the top of the slideshow. */
  headingText: PropTypes.string,
  /**  The images to display. */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /** A description of the image to show above the slideshow when the image is showing. */
      descriptionText: PropTypes.string,
      /** The placeholder of the image when loading. */
      placeholderUrl: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of source sizes. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      sizes: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      srcSet: PropTypes.string,
      /** Title of the image to show when hovering over it on desktop browsers. */
      title: PropTypes.string,
      /** URL pointing to the image to display. */
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Is the slideshow the width of it's container */
  isFluid: PropTypes.bool,
  /** Is the slideshow formatted to have rounded corners. */
  isRounded: PropTypes.bool,
  /** Is the slideshow displaying the bullet navigation. */
  isShowingBulletNavigation: PropTypes.bool,
  /** Is the slideshow displaying the slide index. */
  isShowingIndex: PropTypes.bool,
  /** Is the slideshow displaying thumbnails. */
  isShowingThumbnails: PropTypes.bool,
  /** Is the slideshow fitting the height of it's container. */
  isStretched: PropTypes.bool,
  /** The index used to define the image shown when the slideshow is opened. */
  startIndex: PropTypes.number,
  /** The rendered image will fill the container width and height. */
  willFill: PropTypes.bool,
};
