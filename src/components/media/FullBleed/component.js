import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Segment } from 'semantic-ui-react';
import { size } from 'lodash';

import { ResponsiveImage } from 'media/ResponsiveImage';

import { DEFAULT_BOTTOM_OFFSET } from './constants';

/**
 * A full bleed takes up the width of its containing element
 * and the height of the viewport.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  bottomOffset,
  children,
  hasGradient,
  imageUrl,
  placeholderImageUrl,
}) => (
  <Segment
    className={getClassNames('full-bleed', {
      'has-gradient': hasGradient,
      'has-children': size(children) > 0,
    })}
    style={{
      '--full-bleed-bottom-offset': bottomOffset,
    }}
    vertical
  >
    <ResponsiveImage
      imageUrl={imageUrl}
      isFluid
      placeholderImageUrl={placeholderImageUrl}
    />
    {children}
  </Segment>
);

Component.displayName = 'FullBleed';

Component.defaultProps = {
  bottomOffset: DEFAULT_BOTTOM_OFFSET,
  children: null,
  hasGradient: false,
  imageUrl: null,
  placeholderImageUrl: null,
};

Component.propTypes = {
  /** Reduce the height of the FullBleed with an offset, supports CSS dimensions. */
  bottomOffset: PropTypes.string,
  /** The children to render inside the full bleed. */
  children: PropTypes.node,
  /** Is there a gradient overlaying the full bleed.  */
  hasGradient: PropTypes.bool,
  /** URL pointing to the image to render. */
  imageUrl: PropTypes.string,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
};
