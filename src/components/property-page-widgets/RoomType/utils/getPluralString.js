/**
 * @param {number} amount
 * @param {string} singular
 * @param {string} plural
 * @return {string}
 */
export const getPluralString = (amount, singular, plural) =>
  `${amount} ${amount === 1 ? singular : plural}`;
