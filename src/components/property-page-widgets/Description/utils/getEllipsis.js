/**
 * @param  {string} paragraphText
 * @return {string}
 */
export const getEllipsis = paragraphText =>
  paragraphText.slice(-1) === '.' ? '..' : '...';
