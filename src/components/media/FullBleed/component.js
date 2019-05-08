import 'semantic-ui-styles/segment.less';
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
  imageHeight,
  imageWidth,
  placeholderImageUrl,
  sizes,
  srcSet,
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
      imageHeight={imageHeight}
      imageUrl={imageUrl}
      imageWidth={imageWidth}
      isFluid
      placeholderImageUrl={placeholderImageUrl}
      sizes={sizes}
      srcSet={srcSet}
    />
    {children}
  </Segment>
);

Component.displayName = 'FullBleed';

Component.defaultProps = {
  bottomOffset: DEFAULT_BOTTOM_OFFSET,
  children: null,
  hasGradient: false,
  imageHeight: undefined,
  imageUrl: null,
  imageWidth: undefined,
  placeholderImageUrl: null,
  sizes: null,
  srcSet: null,
};

Component.propTypes = {
  /** Reduce the height of the FullBleed with an offset, supports CSS dimensions. */
  bottomOffset: PropTypes.string,
  /** The children to render inside the full bleed. */
  children: PropTypes.node,
  /** Is there a gradient overlaying the full bleed.  */
  hasGradient: PropTypes.bool,
  /** The natural height of the image. */
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** URL pointing to the image to render. */
  imageUrl: PropTypes.string,
  /** The natural width of the image. */
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of source sizes for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  sizes: PropTypes.string,
  /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
  srcSet: PropTypes.string,
};
