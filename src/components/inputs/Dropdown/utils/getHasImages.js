/**
 * @param  {Object[]} options
 * @return {boolean}
 */
export const getHasImages = options =>
  options.some(
    option =>
      option.hasOwnProperty('imageUrl') ||
      (option.hasOwnProperty('imageSrcSet') &&
        option.hasOwnProperty('imageSizes'))
  );
