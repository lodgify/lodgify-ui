/**
 * @param  {boolean} isShowingPageNumbers
 * @return {number|undefined}
 */
export const getSiblingRange = isShowingPageNumbers =>
  isShowingPageNumbers ? 0 : undefined;
