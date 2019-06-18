/**
 * @param  {boolean} isShowingPageNumbers
 * @return {number}
 */
export const getBoundryRange = isShowingPageNumbers =>
  isShowingPageNumbers ? 1 : 10;
