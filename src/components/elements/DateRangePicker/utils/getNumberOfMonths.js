/**
 * @return {Number|undefined}
 */
export const getNumberOfMonths = () =>
  window && window.innerWidth < 800 ? 1 : undefined;
