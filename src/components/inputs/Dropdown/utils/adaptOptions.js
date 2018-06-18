import React from 'react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * If no options specify an image, return options.
 * If one or more options has an image,
 * modify the text property to include the image.
 * @param  {Object[]} options
 * @param  {Boolean} hasImages
 * @return {Object[]}
 */
export const adaptOptions = (options, hasImages) => {
  return hasImages
    ? options.map(({ image, text, value }, index) => ({
        text: [
          <img
            alt={text}
            className="ui image"
            key={buildKeyFromStrings(`img${text}`, index)}
            src={image || ''}
          />,
          <span className="text" key={buildKeyFromStrings(`spa${text}`, index)}>
            {text}
          </span>,
        ],
        value,
      }))
    : options;
};
