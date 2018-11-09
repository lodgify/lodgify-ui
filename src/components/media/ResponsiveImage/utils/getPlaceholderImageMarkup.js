import React from 'react';
import { Image, Label } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getIsFluid } from './getIsFluid';
import { getAspectRatioPlaceholderMarkup } from './getAspectRatioPlaceholderMarkup';

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
 * @param  {boolean}       imageProps.isImageLoadedFromCache
 * @param  {string}        imageProps.placeholderImageUrl
 * @param  {boolean}       imageProps.shouldImageLoad
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
  isImageLoaded,
  isImageLoadedFromCache,
  placeholderImageUrl,
  shouldImageLoad,
  /* eslint-enable react/prop-types */
}) => (
  <div
    className={getClassNames('image-with-placeholder-container', {
      'has-blurred-children': !isImageLoaded && !isImageLoadedFromCache,
      'is-visible': shouldImageLoad,
    })}
  >
    {getAspectRatioPlaceholderMarkup(imageWidth, imageHeight)}
    {shouldImageLoad && (
      <Image
        alt={alternativeText}
        avatar={isAvatar}
        fluid={getIsFluid(imageWidth, imageHeight)}
        onLoad={handleImageLoad}
        src={imageUrl}
        title={imageTitle}
      >
        {!imageUrl ? <Label content={imageNotFoundLabelText} /> : null}
      </Image>
    )}
    {!isImageLoadedFromCache && (
      <div className="placeholder-image-container">
        <img
          className={getClassNames('placeholder-image', {
            'ui image fluid': getIsFluid(imageWidth, imageHeight),
          })}
          src={placeholderImageUrl}
        />
        {!imageUrl && <Label content={imageNotFoundLabelText} />}
      </div>
    )}
  </div>
);
