/**
 * @param {Number} amount
 * @param {String} singular
 * @param {String} plural
 * @return {String}
 */
export const getPluralString = (amount, singular, plural) =>
  `${amount} ${amount === 1 ? singular : plural}`;
