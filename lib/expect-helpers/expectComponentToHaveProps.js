/**
 * @param  {Object} component     - an enzyme wrapper instance
 * @param  {Object} expectedProps
 * @return {undefined}
 */
export const expectComponentToHaveProps = (component, expectedProps) => {
  const actual = component.props();
  expect(actual).toEqual(expect.objectContaining(expectedProps));
};
