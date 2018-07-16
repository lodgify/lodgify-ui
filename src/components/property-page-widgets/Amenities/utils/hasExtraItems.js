/**
 * @param  {Any[]}    array
 * @param  {Boolean}  shouldCompareThree
 * @return {Boolean}
 */
export const hasExtraItems = (array, shouldCompareThree) => {
  const numberToCompare = shouldCompareThree ? 3 : 5;
  return array.length > numberToCompare;
};
