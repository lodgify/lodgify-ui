/**
 * TestidFactory
 * generate a generator of testid with prefix
 * @param {string} prefix
 */
export const testidFactory = prefix => str =>
  `${prefix}${str ? `-${str}` : ''}`;
