import { getValue } from './getValue';

describe('getValue', () => {
  describe('if it is passed a React `SyntheticEvent`', () => {
    it('should return `eventOrValue.target.value`', () => {
      const value = '🍞';
      const mockEvent = {
        constructor: { name: 'SyntheticEvent' },
        target: { value },
      };
      const actual = getValue(mockEvent);
      expect(actual).toBe(value);
    });
  });

  describe('if it is passed anything else', () => {
    it('should return `eventOrValue`', () => {
      const values = [true, '🍞', 1, null, undefined, () => {}, {}];
      values.forEach(value => {
        const actual = getValue(value);
        expect(actual).toBe(value);
      });
    });
  });
});
