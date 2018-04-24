/**
 * @param  {Any[]}    items
 * @param  {Boolean}  shouldGetSix
 * @return {Any[]}
 */
export const getDefaultItems = (items, shouldGetSix) => {
  const numberOfItems = shouldGetSix ? 6 : 9;
  return items.slice(0, numberOfItems);
};
