/**
 * @param  {String} paragraphText
 * @return {String}
 */
export const getEllipsis = paragraphText =>
  paragraphText.slice(-1) === '.' ? '..' : '...';
