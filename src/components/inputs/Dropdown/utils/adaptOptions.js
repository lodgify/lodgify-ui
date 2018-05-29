import React from 'react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * If no options specify an image, return false.
 * If one or more options has an image,
 * modify the text property to include the image.
 * @param  {Object[]} options
 * @return {Boolean|Object[]}
 */
export const adaptOptions = options => {
  const hasImage = options.some(option => option.hasOwnProperty('image'));
  return (
    hasImage &&
    options.map(({ image, text, value }, index) => ({
      text: [
        <img
          key={buildKeyFromStrings(`img${text}`, index)}
          className="ui image"
          src={image || ''}
          alt={text}
        />,
        <span key={buildKeyFromStrings(`spa${text}`, index)} className="text">
          {text}
        </span>,
      ],
      value,
    }))
  );
};
