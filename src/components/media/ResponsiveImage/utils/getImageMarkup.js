import React from 'react';
import { Image, Label } from 'semantic-ui-react';

import { getIsFluid } from './getIsFluid';

/**
 * @param  {Object}        imageProps
 * @param  {string}        imageProps.alternativeText
 * @param  {number|string} imageProps.imageHeight
 * @param  {string}        imageProps.imageNotFoundLabelText
 * @param  {string}        imageProps.imageTitle
 * @param  {string}        imageProps.imageUrl
 * @param  {number|string} imageProps.imageWidth
 * @param  {boolean}       imageProps.isAvatar
 * @param  {Function}      handleImageLoad
 * @return {Object}
 */
export const getImageMarkup = (
  {
    /* eslint-disable react/prop-types */
    alternativeText,
    imageHeight,
    imageNotFoundLabelText,
    imageTitle,
    imageUrl,
    imageWidth,
    isAvatar,
    isFluid,
    sizes,
    srcSet,
    /* eslint-enable react/prop-types */
  },
  handleImageLoad
) => (
  <Image
    alt={alternativeText}
    avatar={isAvatar}
    fluid={getIsFluid(isFluid, imageWidth, imageHeight)}
    onLoad={handleImageLoad}
    sizes={sizes}
    src={imageUrl}
    srcSet={srcSet}
    title={imageTitle}
  >
    {!imageUrl ? <Label content={imageNotFoundLabelText} /> : null}
  </Image>
);
