import { renderBlockPlaceholder } from './renderBlockPlaceholder';

/**
 * @param  {Object[]} adaptedImages
 * @param  {string}   brokenImage
 * @return {Object[]}
 */
export const getAdaptedImagesWithPlaceholders = (adaptedImages, brokenImage) =>
  adaptedImages.map(image =>
    image.original === brokenImage
      ? {
          renderItem: () => renderBlockPlaceholder(),
        }
      : image
  );
