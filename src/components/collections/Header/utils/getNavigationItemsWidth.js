import { CHARACTER_WIDTH, MARGIN_WIDTH } from '../constants';

/**
 * @param {Array} navigationItems
 * @return {number}
 */
export const getNavigationItemsWidth = navigationItems => {
  const textWidth =
    navigationItems.map(item => item.text).join('').length * CHARACTER_WIDTH;
  const marginWidth =
    navigationItems.map(item => item.text).length * MARGIN_WIDTH;

  return textWidth + marginWidth;
};
