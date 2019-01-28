import { CHARACTER_WIDTH, ICON_OFFSET } from '../constants';

import { getMinWidth } from './getMinWidth';

describe('getMinWidth', () => {
  describe('if `isSearchable` is `false`', () => {
    it('should return `undefined`', () => {
      const actual = getMinWidth(false);

      expect(actual).toBe(undefined);
    });
  });

  describe('if `isSearchable` is `true`', () => {
    it('should return the right object', () => {
      const items = [
        { text: 'Something' },
        { text: 'Something even longer' },
        { text: 'Something longer' },
      ];
      const actual = getMinWidth(true, items);

      expect(actual).toEqual({
        minWidth:
          'Something even longer'.length * CHARACTER_WIDTH + ICON_OFFSET,
      });
    });
  });
});
