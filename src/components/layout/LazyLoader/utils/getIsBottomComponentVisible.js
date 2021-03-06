import { HEIGHT_OFF_SET } from './constants';

/**
 * @param {Object} boundingClientRect
 * @param {number} boundingClientRect.top
 * @param {number} boundingClientRect.bottom
 * @param {number} boundingClientRect.height
 * @param {number} windowHeight
 * @return {boolean}
 */
export const getIsBottomComponentVisible = ({ bottom }, windowHeight) =>
  bottom + HEIGHT_OFF_SET > -windowHeight && bottom - windowHeight / 2 <= 0;
