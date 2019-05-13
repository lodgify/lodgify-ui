import { size } from 'utils/size';

/**
 * @param  {Object[]} navigationItems
 * @return {boolean}
 */
export const getAreNavigationItemsGrouped = navigationItems =>
  navigationItems.some(({ subItems }) => size(subItems));
