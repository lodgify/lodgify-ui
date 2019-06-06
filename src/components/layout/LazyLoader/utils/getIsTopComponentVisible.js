import { HEIGHT_OFF_SET } from './constants';

/**
 * @param {Object} boundingClientRect
 * @param {number} boundingClientRect.top
 * @param {number} boundingClientRect.bottom
 * @param {number} boundingClientRect.height
 * @param {number} windowHeight
 * @return {boolean}
 */
export const getIsTopComponentVisible = ({ top }, windowHeight) =>
  top - HEIGHT_OFF_SET <= windowHeight && top > -windowHeight / 2;
