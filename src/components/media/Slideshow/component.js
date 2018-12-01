import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import getClassNames from 'classnames';

import { Heading } from 'typography/Heading';
import { ICON_NAMES } from 'elements/Icon';

import { adaptImages } from './utils/adaptImages';
import { renderNavButton } from './utils/renderNavButton';

/**
 * A slideshow displays a series of images.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  hasShadow,
  headingText,
  images,
  isRounded,
  isShowingBulletNavigation,
  isStretched,
}) => (
  <Fragment>
    {headingText && <Heading>{headingText}</Heading>}
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
      renderLeftNav={renderNavButton(ICON_NAMES.CHEVRON_LEFT)}
      renderRightNav={renderNavButton(ICON_NAMES.CHEVRON_RIGHT)}
      showBullets={isShowingBulletNavigation}
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
    />
  </Fragment>
);

Component.displayName = 'Slideshow';

Component.defaultProps = {
  hasShadow: true,
  headingText: null,
  isRounded: true,
  isShowingBulletNavigation: true,
  isStretched: false,
};

Component.propTypes = {
  /** Has the slideshow got a drop shadow  */
  hasShadow: PropTypes.bool,
  /** The text to display as a heading at the top of the slideshow. */
  headingText: PropTypes.string,
  /**  The images to display.  */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      /** Alternative text to show if the image can't be loaded by the browser. */
      alternativeText: PropTypes.string,
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
  /** Is the slideshow formatted to have rounded corners */
  isRounded: PropTypes.bool,
  /** Is the slideshow displaying the bullet navigation */
  isShowingBulletNavigation: PropTypes.bool,
  /** Is the slideshow fitting the height of it's container */
  isStretched: PropTypes.bool,
};
