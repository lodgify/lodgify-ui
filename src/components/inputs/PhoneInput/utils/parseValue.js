import { parse, format } from 'libphonenumber-js';

/**
 * Parse country code and number format from value.
 * @param  {string} value
 * @return {Object}
 */
export const parseValue = value => {
  const { country, phone } = parse(value);
  const formattedValue = phone && format(phone, country, 'International');

  return {
    country,
    phone: formattedValue || value,
  };
};
