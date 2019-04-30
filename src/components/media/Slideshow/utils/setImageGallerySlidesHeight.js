/**
 * @param {number} height
 * @param {Object} componentRef
 * @return {undefined}
 */
export const setImageGallerySlidesHeight = (height, componentRef) => {
  if (!componentRef) return;

  const imageWrapperElement = componentRef.querySelector(
    '.image-gallery-slides'
  );

  imageWrapperElement.style.height = `${height}px`;
};
