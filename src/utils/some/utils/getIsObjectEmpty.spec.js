import { getIsObjectEmpty } from './getIsObjectEmpty';

describe('getIsObjectEmpty', () => {
  const testCases = [
    {
      value: {
        a: null,
        b: null,
      },
      expectedValue: true,
    },
    {
      value: {},
      expectedValue: true,
    },
    {
      value: {
        a: null,
        b: {},
      },
      expectedValue: false,
    },
  ];

  testCases.forEach(({ value, expectedValue }) => {
    it('should return the right value', () => {
      expect(getIsObjectEmpty(value)).toBe(expectedValue);
    });
  });
});
