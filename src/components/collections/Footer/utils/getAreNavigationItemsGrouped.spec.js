import { getAreNavigationItemsGrouped } from './getAreNavigationItemsGrouped';

describe('getAreNavigationItemsGrouped', () => {
  describe('if any of the `navigationItems` has a `subItems` property with length > 0', () => {
    it('should return `true` ', () => {
      const testCases = [
        [{ subItems: [0, 1, 2] }, {}, {}],
        [{ subItems: [0, 1, 2] }, { subItems: [0, 1, 2] }, {}],
        [
          { subItems: [0, 1, 2] },
          { subItems: [0, 1, 2] },
          { subItems: [0, 1, 2] },
        ],
      ];

      testCases.forEach(testCase => {
        const actual = getAreNavigationItemsGrouped(testCase);

        expect(actual).toBe(true);
      });
    });
  });

  describe('if none of the `navigationItems` has a `subItems` property with length > 0', () => {
    it('should return `false`', () => {
      const testCases = [
        [{}, {}, {}],
        [{ subItems: [] }, {}, {}],
        [{ subItems: undefined }, { subItems: [] }, {}],
      ];

      testCases.forEach(testCase => {
        const actual = getAreNavigationItemsGrouped(testCase);

        expect(actual).toBe(false);
      });
    });
  });
});
