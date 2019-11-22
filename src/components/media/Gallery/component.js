import React from 'react';
import PropTypes from 'prop-types';

import { LightBox } from 'media/LightBox';
import { testidFactory } from 'utils/testid';

const TEST_ID_PREFIX = 'gallery';

const testid = testidFactory(TEST_ID_PREFIX);

/**
 * A gallery displays a collection of images in a modal.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ images, trigger }) => (
  <LightBox data-testid={testid()} slideShowImages={images} trigger={trigger} />
);

Component.displayName = 'Gallery';

Component.propTypes = {
  /** The images to display.  */
  images: PropTypes.arrayOf(
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
  /** The element to be clicked to display the gallery. */
  trigger: PropTypes.node.isRequired,
};
