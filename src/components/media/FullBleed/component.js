import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Segment } from 'semantic-ui-react';
import { size } from 'lodash';

import { ResponsiveImage } from 'media/ResponsiveImage';

/**
 * A full bleed takes up the width of its containing element
 * and the height of the viewport.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  children,
  hasGradient,
  imageUrl,
  isFixedSearchBarDisplayed,
  placeholderImageUrl,
}) => (
  <Segment
    className={getClassNames('full-bleed', {
      'has-gradient': hasGradient,
      'has-children': size(children) > 0,
      'is-fixed-search-bar-displayed': isFixedSearchBarDisplayed,
    })}
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
  children: null,
  hasGradient: false,
  imageUrl: null,
  isFixedSearchBarDisplayed: false,
  placeholderImageUrl: null,
};

Component.propTypes = {
  /** The children to render inside the full bleed. */
  children: PropTypes.node,
  /** Is there a gradient overlaying the full bleed.  */
  hasGradient: PropTypes.bool,
  /** URL pointing to the image to render. */
  imageUrl: PropTypes.string,
  /** Is there a fixed search bar being displayed above the full bleed. */
  isFixedSearchBarDisplayed: PropTypes.bool,
  /** URL pointing to the placeholder image to render. */
  placeholderImageUrl: PropTypes.string,
};
