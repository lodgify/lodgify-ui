import {
  navigationItems,
  largeNavigationItems,
} from '../mock-data/navigationItems';

import { areNavigationItemsExceedingHeaderMaxWidth } from './areNavigationItemsExceedingHeaderMaxWidth';

const primaryCTA = { onClick: expect.any(Function), text: 'Book now' };

describe('`areNavigationItemsExceedingHeaderMaxWidth`', () => {
  it('should return false if the width of the navigation items is smaller than headerMaxWidth', () => {
    const actual = areNavigationItemsExceedingHeaderMaxWidth(
      navigationItems,
      primaryCTA
    );

    expect(actual).toBe(false);
  });
  it('should return true if the width of the navigation items is greater than headerMaxWidth', () => {
    const actual = areNavigationItemsExceedingHeaderMaxWidth(
      largeNavigationItems,
      primaryCTA
    );

    expect(actual).toBe(true);
  });
});
