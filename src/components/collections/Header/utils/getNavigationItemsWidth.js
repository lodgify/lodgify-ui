import { CHARACTER_WIDTH, MENU_ITEM_MARGIN_WIDTH } from '../constants';

/**
 * @param {Array} navigationItems
 * @return {number}
 */
export const getNavigationItemsWidth = navigationItems => {
  const textWidth =
    navigationItems.map(item => item.text).join('').length * CHARACTER_WIDTH;
  const marginWidth = navigationItems.length * MENU_ITEM_MARGIN_WIDTH;

  return textWidth + marginWidth;
};
