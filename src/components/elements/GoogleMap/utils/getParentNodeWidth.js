/**
 * @param  {Object} element
 * @return {number}
 */
export const getParentNodeWidth = element => {
  const { Math, getComputedStyle, parseInt } = global;

  return Math.floor(
    element.parentNode.offsetWidth -
      parseInt(getComputedStyle(element.parentNode).paddingLeft, 10) -
      parseInt(getComputedStyle(element.parentNode).paddingRight, 10)
  );
};
