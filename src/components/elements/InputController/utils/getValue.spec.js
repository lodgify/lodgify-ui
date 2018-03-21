import { getValue } from './getValue';

describe('getValue', () => {
  describe('if it is passed a an object structured as an event', () => {
    it('should return `eventOrValue.target.value`', () => {
      const value = '🍞';
      const mockEvent = { target: { value } };
      const actual = getValue(mockEvent);
      expect(actual).toBe(value);
    });

    it('should respect defined but falsy values at `eventOrValue.target.value`', () => {
      const values = [false, null, 0, NaN, ''];
      values.forEach(value => {
        const mockEvent = { target: { value } };
        const actual = getValue(mockEvent);
        expect(actual).toBe(value);
      });
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
