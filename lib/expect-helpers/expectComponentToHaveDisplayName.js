/**
 * @param  {Object}     component
 * @param  {String}     displayName
 * @return {undefined}
 */
export const expectComponentToHaveDisplayName = (component, displayName) => {
  const actual = component.displayName;
  expect(actual).toBe(displayName);
};
