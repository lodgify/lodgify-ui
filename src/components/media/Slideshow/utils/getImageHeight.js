/**
 * @param  {Object} componentRef
 * @return {undefined|number}
 */
export const getImageHeight = componentRef =>
  componentRef &&
  componentRef.querySelector('.image-gallery-slide').getBoundingClientRect()
    .height;
