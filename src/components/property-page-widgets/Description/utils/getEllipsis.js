/**
 * @param  {String} paragraphText
 * @return {String}
 */

export const getEllipsis = paragraphText => {
  return paragraphText.slice(-1) === '.' ? '..' : '...';
};
