/**
 * Adapts image data to the shape required by `react-image-gallery`.
 * @param  {Object[]} images
 * @return {Object[]}
 */
export const adaptImages = images =>
  images.map(({ url, sizes, srcSet, title, placeholderUrl }) => ({
    original: url,
    originalAlt: title,
    originalTitle: title,
    thumbnail: url,
    placeholder: placeholderUrl || url,
    thumbnailAlt: title,
    sizes,
    srcSet,
  }));
