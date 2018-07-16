/**
 * @param  {Any[]}    items
 * @param  {Boolean}  shouldGetThree
 * @return {Any[]}
 */
export const getDefaultItems = (items, shouldGetThree) => {
  const numberOfItems = shouldGetThree ? 3 : 5;
  return items.slice(0, numberOfItems);
};
