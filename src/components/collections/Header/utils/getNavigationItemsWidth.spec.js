import { navigationItems } from '../mock-data/navigationItems';

import { getNavigationItemsWidth } from './getNavigationItemsWidth';

describe('`getNavigationItemsTextLength`', () => {
  it('should return the number of pixels corresponding to the length of the navigation items including margins', () => {
    const actual = getNavigationItemsWidth(navigationItems);

    expect(actual).toBe(386);
  });
});
