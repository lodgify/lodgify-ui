import { getIsVisible } from './getIsVisible';

describe('getIsVisible', () => {
  it('should return true', () => {
    const actual = getIsVisible({ top: 50, bottom: 100, height: 50 }, 1000);

    expect(actual).toBe(true);
  });

  it('should return false', () => {
    const actual = getIsVisible(
      { top: -1100, bottom: -1300, height: 200 },
      1000
    );

    expect(actual).toBe(false);
  });
});
