import { size } from 'lodash';

/**
 * @param  {Object[]} navigationItems
 * @return {Boolean}
 */
export const getAreNavigationItemsGrouped = navigationItems =>
  navigationItems.some(({ subItems }) => size(subItems));
