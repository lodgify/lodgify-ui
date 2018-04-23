import { getBackgroundImageUrl } from './getBackgroundImageUrl';

describe('getBackgroundImageUrl', () => {
  it('should return null if passed a falsy value', () => {
    const falsyValues = ['', null, undefined, false, 0];
    falsyValues.forEach(falsyValue => {
      const actual = getBackgroundImageUrl(falsyValue);
      expect(actual).toBeNull();
    });
  });

  it('should return a formatted string if passed a non-empty string', () => {
    const url = '💻';
    const actual = getBackgroundImageUrl(url);
    expect(actual).toBe(`url(${url})`);
  });
});
