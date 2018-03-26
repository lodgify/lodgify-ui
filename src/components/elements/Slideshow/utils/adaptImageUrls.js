/**
 * Adapts image urls to the shape required by `react-image-gallery`.
 * @param  {String[]} imageUrls
 * @return {Object[]}
 */
export const adaptImageUrls = imageUrls =>
  imageUrls.map(imageUrl => ({
    original: imageUrl,
    srcSet: `${imageUrl}?w=400&h=400&mode=max 320w,
        ${imageUrl}?w=800&h=800&mode=max 768w,
        ${imageUrl}?w=1024&h=1000&mode=max 1024w`,
    sizes: '100w',
  }));
