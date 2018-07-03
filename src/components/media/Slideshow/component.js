import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';

import { adaptImages } from './utils/adaptImages';
import { renderNavButton } from './utils/renderNavButton';

/**
 * A slideshow displays a series of images.
 * @return {Object}
 */
export const Component = ({ images, ...props }) => (
  <ImageGallery
    items={adaptImages(images)}
    lazyLoad
    // Note: styles for the pagination controls
    // live in `styles/semantic/themes/livingstone/collections/menu.*`
    renderLeftNav={renderNavButton('left')}
    renderRightNav={renderNavButton('right')}
    showBullets
    showFullscreenButton={false}
    showPlayButton={false}
    showThumbnails={false}
    {...props}
  />
);

Component.displayName = 'Slideshow';

Component.propTypes = {
  /**  The images to display.  */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /** Alternative text to show if the image can't be loaded by the browser. */
      alternativeText: PropTypes.string,
      /** A set of media conditions indicating to the browser which source to choose.
       *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
       */
      sizes: PropTypes.string,
      /** The set of images the browser can choose between depending on screen width.
       *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
       */
      sourceSet: PropTypes.string,
      /** Title of the image to show when hovering over it on desktop browsers. */
      title: PropTypes.string,
      /** URL pointing to the image to display. */
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
