import React from 'react';
import { Image, Label } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getIsFluid } from './getIsFluid';

/**
 * @param  {Object}        imageProps
 * @param  {string}        imageProps.alternativeText
 * @param  {Function}      imageProps.handleImageLoad
 * @param  {string|number} imageProps.imageHeight
 * @param  {string}        imageProps.imageNotFoundLabelText
 * @param  {string}        imageProps.imageTitle
 * @param  {string}        imageProps.imageUrl
 * @param  {string|number} imageProps.imageWidth
 * @param  {boolean}       imageProps.isAvatar
 * @param  {boolean}       imageProps.isFluid
 * @param  {boolean}       imageProps.isImageLoaded
 * @param  {string}        imageProps.placeholderImageUrl
 * @return {Function}
 */
export const getPlaceholderImageMarkup = ({
  /* eslint-disable react/prop-types */
  alternativeText,
  handleImageLoad,
  imageHeight,
  imageNotFoundLabelText,
  imageTitle,
  imageUrl,
  imageWidth,
  isAvatar,
  isFluid,
  isImageLoaded,
  placeholderImageUrl,
  /* eslint-enable react/prop-types */
}) => (
  <div
    className={getClassNames('image-with-placeholder-container', {
      'has-blurred-children': !isImageLoaded,
    })}
    style={{ height: imageHeight, width: imageWidth }}
  >
    <Image
      alt={alternativeText}
      avatar={isAvatar}
      fluid={getIsFluid(isFluid, imageWidth, imageHeight)}
      height={imageHeight}
      onLoad={handleImageLoad}
      src={imageUrl}
      title={imageTitle}
      width={imageWidth}
    >
      {!imageUrl ? <Label content={imageNotFoundLabelText} /> : null}
    </Image>
    {!isImageLoaded && (
      <img className="placeholder-image" src={placeholderImageUrl} />
    )}
  </div>
);
