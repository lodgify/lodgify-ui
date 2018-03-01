import { getDefaultValue } from './getDefaultValue';

describe('getDefaultValue', () => {
  describe('if passed an options object', () => {
    it('should return the `value` property of the first index', () => {
      const optionsWithImages = [
        { value: 'firstValue' },
        { value: 'secondValue' },
      ];
      const actual = getDefaultValue(optionsWithImages);
      expect(actual).toBe(optionsWithImages[0].value);
    });
  });

  describe('if passed undefined', () => {
    it('should return null', () => {
      const actual = getDefaultValue(undefined);
      expect(actual).toBe(null);
    });
  });
});
