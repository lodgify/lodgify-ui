const notAPhoneNumber = '000';
const aPhoneNumber = '+34688987654';
const countryCode = 'ES';

import { parseValue } from './parseValue';

describe('parseValue', () => {
  describe('if value is not a parseable telephone number', () => {
    it('should return `country` as undefined', () => {
      const { country: actual } = parseValue(notAPhoneNumber);
      expect(actual).not.toBeDefined();
    });

    it('should return the value as `phone`', () => {
      const { phone: actual } = parseValue(notAPhoneNumber);
      expect(actual).toBe(notAPhoneNumber);
    });
  });

  describe('if value is a parseable telephone number', () => {
    it('should return `country` as the country code', () => {
      const { country: actual } = parseValue(aPhoneNumber);
      expect(actual).toBe(countryCode);
    });

    it('should return a formatted phone number as `phone`', () => {
      const { phone: actual } = parseValue(aPhoneNumber);
      expect(actual).toEqual(expect.stringContaining(' '));
      expect(actual.replace(/\s/g, '')).toBe(aPhoneNumber);
    });
  });
});
