import { getEllipsis } from './getEllipsis';

/**
 * @param  {String} paragraph
 * @return {String}
 */
export const getParagraphWithEllipsis = paragraph =>
  `${paragraph}${getEllipsis(paragraph)}`;
