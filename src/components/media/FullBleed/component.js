import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { getBackgroundImageUrl } from 'lib/get-background-image-url';

/**
 * A full bleed takes up the width of its containing element
 * and the height of the viewport.
 *
 * @returns {Object}
 */
export const Component = ({ children, imageUrl }) => (
  <Segment
    className="full-bleed"
    style={{ backgroundImage: getBackgroundImageUrl(imageUrl) }}
    vertical
  >
    {children}
  </Segment>
);

Component.displayName = 'FullBleed';

Component.defaultProps = {
  children: null,
  imageUrl: null,
};

Component.propTypes = {
  /** The children to render inside the full bleed. */
  children: PropTypes.node,
  /** URL pointing to the image to render. */
  imageUrl: PropTypes.string,
};
