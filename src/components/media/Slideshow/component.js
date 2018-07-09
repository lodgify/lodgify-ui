import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import getClassNames from 'classnames';

import { adaptImages } from './utils/adaptImages';
import { renderNavButton } from './utils/renderNavButton';

/**
 * A slideshow displays a series of images.
 * @return {Object}
 */
export const Component = ({
  hasShadow,
  images,
  isRounded,
  isShowingBulletNavigation,
  isStretched,
}) => (
  <ImageGallery
    additionalClass={getClassNames('', {
      'fit-height': isStretched,
      'no-shadow': !hasShadow,
      'no-border-radius': !isRounded,
    })}
    // Note: styles for the pagination controls
    // live in `styles/semantic/themes/livingstone/collections/menu.*`
    items={adaptImages(images)}
    lazyLoad
    renderLeftNav={renderNavButton('left')}
    renderRightNav={renderNavButton('right')}
    showBullets={isShowingBulletNavigation}
    showFullscreenButton={false}
    showPlayButton={false}
    showThumbnails={false}
  />
);

Component.displayName = 'Slideshow';

Component.defaultProps = {
  hasShadow: true,
  isRounded: true,
  isShowingBulletNavigation: true,
  isStretched: false,
};

Component.propTypes = {
  /** Has the slideshow got a drop shadow  */
  hasShadow: PropTypes.bool,
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
  /** Is the slideshow formatted to have rounded corners */
  isRounded: PropTypes.bool,
  /** Is the slideshow displaying the bullet navigation */
  isShowingBulletNavigation: PropTypes.bool,
  /** Is the slideshow fitting the height of it's container */
  isStretched: PropTypes.bool,
};
