import { getDefaultValue } from './getDefaultValue';

describe('getDefaultValue', () => {
  describe('if `children` is truthy', () => {
    it('should return `null`', () => {
      const actual = getDefaultValue('yo');

      expect(actual).toBeNull();
    });
  });

  describe('if `items.length` is 0', () => {
    it('should return `null`', () => {
      const actual = getDefaultValue('yo', []);

      expect(actual).toBeNull();
    });
  });

  describe('if `items[0].value` is falsy', () => {
    it('should return `null`', () => {
      const testCases = [[{}], [{ no: 'value' }], [{ value: '' }]];

      testCases.forEach(testCase => {
        const actual = getDefaultValue('yo', testCase);

        expect(actual).toBeNull();
      });
    });
  });

  describe('if `children` is falsy and `items[0].value` is truthy', () => {
    it('should return `items[0].value`', () => {
      const value = '🐸';
      const actual = getDefaultValue('', [{ value }]);

      expect(actual).toBe(value);
    });
  });

  describe('if `children` is falsy and `items[0].value` is truthy and `isSelectedDisabled` is true', () => {
    it('should return `items[0].value`', () => {
      const value = '🐸';
      const isSelectedDisabled = true;
      const actual = getDefaultValue('', [{ value }], isSelectedDisabled);

      expect(actual).toBe(null);
    });
  });
});
