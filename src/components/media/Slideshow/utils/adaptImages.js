import { renderBlockPlaceholder } from './renderBlockPlaceholder';

/**
 * Adapts image data to the shape required by `react-image-gallery`.
 * If an image is broken, it will render a `BlockPlaceholder` component in its place.
 * @param  {Object[]} images
 * @param  {string} brokenImageUrl
 * @return {Object[]}
 */
export const adaptImages = (images, brokenImageUrl) =>
  images.map(({ alternativeText, url, sizes, srcSet, title }) =>
    url !== brokenImageUrl
      ? {
          original: url,
          originalAlt: alternativeText,
          originalTitle: title,
          sizes,
          srcSet,
        }
      : {
          renderItem: renderBlockPlaceholder,
        }
  );
