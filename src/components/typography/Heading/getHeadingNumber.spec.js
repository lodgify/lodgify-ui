import { getHeadingNumber } from './getHeadingNumber';

const TEST_SIZES = ['galactic', 'planetary', 'football', 'molecular', 'atomic'];

describe('getHeadingNumber', () => {
  it('should return the appropriate heading number', () => {
    TEST_SIZES.forEach(testSize => {
      const actual = getHeadingNumber(TEST_SIZES, testSize);
      const sizeNumber = TEST_SIZES.indexOf(testSize) + 1;

      expect(actual).toBe(sizeNumber.toString());
    });
  });
});
