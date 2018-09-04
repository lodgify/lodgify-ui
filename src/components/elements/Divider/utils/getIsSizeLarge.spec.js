import { getIsSizeLarge } from './getIsSizeLarge';

describe('getIsSizeLarge', () => {
  it('should return true if the size equals to `large`', () => {
    const actual = getIsSizeLarge('large');

    expect(actual).toBe(true);
  });

  it('should return false if the size is not equal to `large`', () => {
    const actual = getIsSizeLarge('Pavarotti');

    expect(actual).toBe(false);
  });
});
