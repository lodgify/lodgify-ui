import { getHrefFaxString } from './getHrefFaxString';

describe('getHrefFaxString', () => {
  it('should return the right string', () => {
    const testCases = [
      { faxNumber: '123', expected: 'fax:123' },
      { faxNumber: '+123', expected: 'fax:+123' },
      { faxNumber: '123-456', expected: 'fax:123-456' },
      { faxNumber: '123 - 456', expected: 'fax:123-456' },
      { faxNumber: '123 456', expected: 'fax:123456' },
      { faxNumber: '123 456 789', expected: 'fax:123456789' },
    ];

    testCases.forEach(({ faxNumber, expected }) => {
      const actual = getHrefFaxString(faxNumber);

      expect(actual).toBe(expected);
    });
  });
});
