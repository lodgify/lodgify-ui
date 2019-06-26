import { getGridColumns } from './getGridColumns';
import {
  NUMBER_OF_COLUMNS_ON_MOBILE,
  NUMBER_OF_COLUMNS_ON_LARGE_DEVICES,
} from './constants';

describe('getGridColumns', () => {
  describe('if `isUserOnMobile` === true', () => {
    it('should return the right number', () => {
      const actual = getGridColumns(true);

      expect(actual).toBe(NUMBER_OF_COLUMNS_ON_MOBILE);
    });
  });

  describe('if `isUserOnMobile` === false', () => {
    it('should return the right number', () => {
      const actual = getGridColumns(false);

      expect(actual).toBe(NUMBER_OF_COLUMNS_ON_LARGE_DEVICES);
    });
  });
});
