/**
 * @param  {Any[]}    array
 * @param  {Boolean}  shouldCompareSix
 * @return {Boolean}
 */
export const hasExtraItems = (array, shouldCompareSix) => {
  const numberToCompare = shouldCompareSix ? 6 : 9;
  return array.length > numberToCompare;
};
