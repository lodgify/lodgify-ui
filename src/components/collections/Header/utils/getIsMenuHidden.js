import { MINIMUM_LOGO_SPACING } from '../constants';

/**
 * @param  {number} menuWidth
 * @param  {number} navigationItemsWidth
 * @return {boolean}
 */
export const getIsMenuHidden = (menuWidth, navigationItemsWidth) =>
  menuWidth <= navigationItemsWidth + MINIMUM_LOGO_SPACING;
