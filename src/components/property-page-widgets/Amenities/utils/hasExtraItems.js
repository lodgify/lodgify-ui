/**
 * @param  {any[]}    array
 * @param  {boolean}  shouldCompareThree
 * @return {boolean}
 */
export const hasExtraItems = (array, shouldCompareThree) => {
  const numberToCompare = shouldCompareThree ? 3 : 5;

  return array.length > numberToCompare;
};
