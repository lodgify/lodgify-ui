/**
 * Adapts image data to the shape required by `react-image-gallery`.
 * @param  {Object[]} images
 * @return {Object[]}
 */
export const adaptImages = images =>
  images.map(({ alternativeText, url, sizes, sourceSet, title }) => ({
    original: url,
    originalAlt: alternativeText,
    originalTitle: title,
    sizes,
    srcSet: sourceSet,
  }));
