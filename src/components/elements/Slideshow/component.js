import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';

import { adaptImageUrls } from './utils/adaptImageUrls';
import { renderNavButton } from './utils/renderNavButton';

/**
 * A slideshow displays a series of images.
 * @return {Object}
 */
export const Component = ({ imageUrls }) => (
  <ImageGallery
    items={adaptImageUrls(imageUrls)}
    lazyLoad
    // Note: styles for the pagination controls
    // live in `semantic/src/themes/livingstone/collections/menu.*`
    renderRightNav={renderNavButton('right')}
    renderLeftNav={renderNavButton('left')}
    showBullets
    showFullscreenButton={false}
    showPlayButton={false}
    showThumbnails={false}
  />
);

Component.displayName = 'Slideshow';

Component.defaultProps = {
  // onPageChange: Function.prototype,
  // startingPage: 1,
};

Component.propTypes = {
  /**
   * A function called each time the page changes
   * @param {Object}  event - The synthetic event
   * @param {Object}  props - The props of the pagination component at the time of the change
   */
  // onPageChange: PropTypes.func,
  /** The active page when the pagination component first renders */
  // startingPage: PropTypes.number,
  /** The total number of pages */
  // totalPages: PropTypes.number.isRequired,
};
