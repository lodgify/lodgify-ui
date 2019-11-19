/**
 * TestidSelectorFactory
 * generate a generator of testid selector with prefix
 * @param {string} prefix
 *
 * @returns {Function}
 */
export const testidSelectorFactory = prefix => (str, operator) =>
  `[data-testid${operator ? operator : ''}="${prefix}${str ? `-${str}` : ''}"]`;
