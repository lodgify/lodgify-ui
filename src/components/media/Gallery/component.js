import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'elements/Modal';
import { Slideshow } from 'media/Slideshow';
import { testidFactory } from 'utils/testid';

const TEST_ID_PREFIX = 'gallery';

const testid = testidFactory(TEST_ID_PREFIX);

/**
 * A Gallery which displays an image or a series of images in a modal.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  slideShowImages,
  trigger,
  isOpen,
  onClose,
  startIndex,
}) => {
  const areThumbnailsActive = slideShowImages.length > 1;

  return (
    <Modal
      className="is-lightbox"
      data-testid={testid()}
      hasCloseIcon
      isFullscreen
      isOpen={isOpen}
      onClose={onClose}
      trigger={trigger}
    >
      <Slideshow
        hasShadow={false}
        images={slideShowImages}
        isRounded={false}
        isShowingBulletNavigation={false}
        isShowingIndex={areThumbnailsActive}
        isShowingThumbnails={areThumbnailsActive}
        startIndex={startIndex}
        thumbnails={slideShowImages}
      />
    </Modal>
  );
};

Component.displayName = 'Gallery';

Component.defaultProps = {
  trigger: null,
  isOpen: undefined,
  onClose: undefined,
  startIndex: 0,
};

Component.propTypes = {
  /** Is the Gallery in an open state. */
  isOpen: PropTypes.bool,
  /** The function called when the closed event happens. */
  onClose: PropTypes.func,
  /**  The images to display inside the Slideshow. */
  slideShowImages: PropTypes.arrayOf(
    PropTypes.shape({
      /** A description of the image to show above the slideshow when the image is showing. */
      descriptionText: PropTypes.string,
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
  /** The index used to define the image shown when the Slideshow is opened. */
  startIndex: PropTypes.number,
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node,
};
