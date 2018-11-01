import React from 'react';

import { getAspectRatioAsPercentage } from './getAspectRatioAsPercentage';
/**
 * @param  {number} imageWidth
 * @param  {number} imageHeight
 * @return {Node|undefined}
 */
export const getAspectRatioPlaceholderMarkup = (imageWidth, imageHeight) => {
  if (!!imageWidth && !!imageHeight) {
    return (
      <div
        style={{
          paddingBottom: `${getAspectRatioAsPercentage(
            imageWidth,
            imageHeight
          )}%`,
        }}
      />
    );
  }
};
