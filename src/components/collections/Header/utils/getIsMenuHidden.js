import { HEADER_HORIZONTAL_PADDING } from '../constants';

/**
 * @param  {number} menuWidth
 * @param  {number} navigationItemsWidth
 * @param  {number} logoWidth
 * @return {boolean}
 */
export const getIsMenuHidden = (menuWidth, navigationItemsWidth, logoWidth) =>
  menuWidth - HEADER_HORIZONTAL_PADDING <= navigationItemsWidth + logoWidth;
