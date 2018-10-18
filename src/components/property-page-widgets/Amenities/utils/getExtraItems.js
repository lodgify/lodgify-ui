/**
 * @param  {any[]}    items
 * @param  {boolean}  shouldGetThree
 * @return {any[]}
 */
export const getExtraItems = (items, shouldGetThree) => {
  const numberOfItems = shouldGetThree ? 3 : 5;

  return items.slice(numberOfItems);
};
