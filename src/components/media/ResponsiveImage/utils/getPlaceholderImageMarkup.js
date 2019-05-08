import 'semantic-ui-styles/image.less';
import React, { Fragment } from 'react';
import { Image } from 'semantic-ui-react';

import { getIsFluid } from './getIsFluid';
import { getAspectRatioPlaceholderMarkup } from './getAspectRatioPlaceholderMarkup';

/**
 * @param  {Object}        imageProps
 * @param  {string|number} imageProps.imageHeight
 * @param  {string|number} imageProps.imageWidth
 * @param  {string}        imageProps.placeholderImageUrl
 * @param  {boolean}       isImageLoaded
 * @return {Object}
 */
export const getPlaceholderImageMarkup = (
  {
    /* eslint-disable react/prop-types */
    imageHeight,
    imageWidth,
    isFluid,
    placeholderImageUrl,
    /* eslint-enable react/prop-types */
  },
  isImageLoaded
) => (
  <Fragment>
    {getAspectRatioPlaceholderMarkup(imageWidth, imageHeight)}
    {!isImageLoaded && (
      <Image
        fluid={getIsFluid(isFluid, imageWidth, imageHeight)}
        src={placeholderImageUrl}
      />
    )}
  </Fragment>
);
