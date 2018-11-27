import React from 'react';
import getClassNames from 'classnames';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { getHasIndentedOptions } from './getHasIndentedOptions';

/**
 * If no options specify an image, return options.
 * If one or more options has an image,
 * modify the text property to include the image.
 * @param  {Object[]} options
 * @param  {boolean} hasImages
 * @return {Object[]}
 */
export const adaptOptions = (options, hasImages) => {
  if (hasImages) {
    return options.map(
      ({ imageSizes, imageUrl, imageSrcSet, text, value }, index) => ({
        text: [
          <img
            alt={text}
            className="ui image"
            key={buildKeyFromStrings(`img${text}`, index)}
            sizes={imageSizes}
            src={imageUrl}
            srcSet={imageSrcSet}
          />,
          <span className="text" key={buildKeyFromStrings(`spa${text}`, index)}>
            {text}
          </span>,
        ],
        value,
      })
    );
  }
  if (getHasIndentedOptions(options)) {
    return options.map(({ indent, ...otherProps }) => ({
      className: getClassNames({
        [`indent-${indent}`]: indent,
      }),
      ...otherProps,
    }));
  }

  return options;
};
