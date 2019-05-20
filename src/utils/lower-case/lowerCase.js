/**
 * @param  {string} stringToLowerCase
 * @return {string}
 */
export const lowerCase = stringToLowerCase =>
  typeof stringToLowerCase === 'string'
    ? stringToLowerCase.toLowerCase()
    : undefined;
