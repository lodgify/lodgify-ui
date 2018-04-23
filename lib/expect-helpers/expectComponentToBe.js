/**
 * @param  {Object}        component     - an enzyme wrapper instance
 * @param  {Object|String} selector
 * @return {undefined}
 */
export const expectComponentToBe = (component, selector) => {
  const actual = component.is(selector);
  expect(actual).toBe(true);
};
