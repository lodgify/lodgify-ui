import { getEllipsis } from './getEllipsis';

/**
 * @param  {string} paragraph
 * @return {string}
 */
export const getParagraphWithEllipsis = paragraph =>
  `${paragraph}${getEllipsis(paragraph)}`;
