/**
 * @param  {boolean}  isResponsive
 * @param  {string}   width
 * @param  {string}   height
 * @return {Object}
 */
export const getPlayerCss = (isResponsive, width, height) =>
  width && height && isResponsive
    ? {
        paddingTop: `${100 / (width / height)}%`,
      }
    : {};
