import React from 'react';

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
    options.map(({ image, text, value }) => ({
      text: [
        <img
          key={`image-${value}`}
          className="ui image"
          src={image || ''}
          alt={text}
        />,
        <span key={`text-${value}`} className="text">
          {text}
        </span>,
      ],
      value,
    }))
  );
};
