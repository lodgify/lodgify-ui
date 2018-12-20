import { getHrefTelString } from './getHrefTelString';

describe('getHrefTelString', () => {
  it('should return the right string', () => {
    const testCases = [
      { telNumber: '123', expected: 'tel:123' },
      { telNumber: '+123', expected: 'tel:+123' },
      { telNumber: '123-456', expected: 'tel:123-456' },
      { telNumber: '123 - 456', expected: 'tel:123-456' },
      { telNumber: '123 456', expected: 'tel:123456' },
      { telNumber: '123 456 789', expected: 'tel:123456789' },
    ];

    testCases.forEach(({ telNumber, expected }) => {
      const actual = getHrefTelString(telNumber);

      expect(actual).toBe(expected);
    });
  });
});
