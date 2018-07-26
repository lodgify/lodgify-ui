/**
 * @param  {Boolean}  isResponsive
 * @param  {String}   width
 * @param  {String}   height
 * @return {Object}
 */
export const getPlayerCss = (isResponsive, width, height) =>
  width && height && isResponsive
    ? {
        paddingTop: `${100 / (width / height)}%`,
      }
    : {};
