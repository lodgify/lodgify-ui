import { getCountryCallingCode } from 'libphonenumber-js';

/**
 * @param  {string} countryCode
 * @return {string}
 */
export const getDiallingCode = countryCode => {
  try {
    return `+${getCountryCallingCode(countryCode)}`;
  } catch {
    return '';
  }
};
