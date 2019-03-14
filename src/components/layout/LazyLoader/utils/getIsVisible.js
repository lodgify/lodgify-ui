import { HEIGHT_OFF_SET } from './constants';

/**
 * @param {Object} boundingClientRect
 * @param {number} boundingClientRect.top
 * @param {number} boundingClientRect.bottom
 * @param {number} boundingClientRect.height
 * @param {number} windowHeight
 */
export const getIsVisible = ({ top, bottom, height }, windowHeight) =>
  top + height >= 0 - HEIGHT_OFF_SET &&
  bottom - height <= windowHeight + HEIGHT_OFF_SET;
