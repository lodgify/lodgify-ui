import { getGoogleMapHeight } from './getGoogleMapHeight';

describe('getGoogleMapHeight', () => {
  it('should return `200px` if `shouldBe200px` is true', () => {
    const actual = getGoogleMapHeight(true);
    expect(actual).toBe('200px');
  });

  it('should return `undefined` if `shouldBe200px` is false', () => {
    const actual = getGoogleMapHeight(false);
    expect(actual).toBeUndefined();
  });
});
