/**
 * @param  {any[]}    items
 * @param  {boolean}  shouldGetThree
 * @return {any[]}
 */
export const getDefaultItems = (items, shouldGetThree) => {
  const numberOfItems = shouldGetThree ? 3 : 5;

  return items.slice(0, numberOfItems);
};
