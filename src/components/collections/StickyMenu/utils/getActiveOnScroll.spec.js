jest.mock('./getComponentTopCoordinates');
import { menuItems } from '../mock-data/mock-data';

import { getComponentTopCoordinates } from './getComponentTopCoordinates';
import { getActiveOnScroll } from './getActiveOnScroll';

getComponentTopCoordinates.mockReturnValue([
  { text: 'availability', top: 3 },
  { text: 'rates', top: 1 },
  { text: 'reviews', top: 8 },
  { text: 'description', top: 2 },
]);

describe('`getActiveOnScroll`', () => {
  it('should return the active menu item based on its `min` value', () => {
    const actual = getActiveOnScroll(menuItems);

    expect(actual).toBe('rates');
  });
});
