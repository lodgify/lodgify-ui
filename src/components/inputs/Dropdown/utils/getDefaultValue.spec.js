import { getDefaultValue } from './getDefaultValue';

describe('getDefaultValue', () => {
  describe('if `value` is a valid dropdown value', () => {
    it('should return `undefined`', () => {
      const options = [{}, {}];
      const actual = getDefaultValue(options, true, true, 'im a valid value');

      expect(actual).toBe(undefined);
    });
  });

  describe('if `hasImages` equals true or `hasLabel` equals false', () => {
    it('should return the `value` property of the first index', () => {
      const options = [
        { value: 'firstSafeValue' },
        { value: 'secondSafeValue' },
      ];
      const actual = getDefaultValue(options, true, false);

      expect(actual).toBe(options[0].value);
    });
  });

  describe('if `hasImages` equals false or `hasLabel` equal true', () => {
    it('should return null', () => {
      const options = [
        { value: 'firstGeezValue' },
        { value: 'secondGeezValue' },
      ];
      const actual = getDefaultValue(options, false, true);

      expect(actual).toBe(null);
    });
  });

  describe('if `options` is an empty array', () => {
    it('should return null', () => {
      const actual = getDefaultValue([], false, false);

      expect(actual).toBe(null);
    });
  });
});
