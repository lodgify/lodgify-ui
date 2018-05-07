/**
 * @param  {Object}             component     - an enzyme wrapper instance
 * @param  {...String|Function} expectedChildren
 * @return {undefined}
 */
export const expectComponentToHaveChildren = (
  component,
  ...expectedChildren
) => {
  // First check that the component has the right number of children.
  const actualNumberOfChildren = component.children();
  const expectedNumberOfChildren = expectedChildren.length;
  expect(actualNumberOfChildren).toHaveLength(expectedNumberOfChildren);
  // Then check that the children have the identity and order expected.
  expectedChildren.forEach((expectedChild, index) => {
    const actualChild = component.childAt(index);

    // If the child is a text node, `childType` is `undefined`
    const actualChildType = actualChild.type();

    if (actualChildType) {
      // Assert element or component node
      expect(actualChildType).toBe(expectedChild);
      return;
    }

    // Assert text node
    const actualChildText = actualChild.text();
    expect(actualChildText).toBe(expectedChild);
  });
};
