jest.mock('libphonenumber-js');

import { getCountryCallingCode } from 'libphonenumber-js';

import { getDiallingCode } from './getDiallingCode';

describe('getDiallingCode', () => {
  it('should call `getCountryCallingCode` with the right arguments', () => {
    const countryCode = 'jp';

    getDiallingCode(countryCode);

    expect(getCountryCallingCode).toHaveBeenCalledWith(countryCode);
  });

  describe('if `getCountryCallingCode` does not throw an error', () => {
    it('should return the right string', () => {
      const callingCode = '999';

      getCountryCallingCode.mockReturnValueOnce(callingCode);

      const actual = getDiallingCode();

      expect(actual).toBe(`+${callingCode}`);
    });
  });

  describe('if `getCountryCallingCode` throws an error', () => {
    it('should return the right string', () => {
      getCountryCallingCode.mockImplementationOnce(() => {
        throw Error();
      });

      const actual = getDiallingCode();

      expect(actual).toBe('');
    });
  });
});
