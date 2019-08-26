/**
 * @param  {number|string} numberOfResults
 * @param  {string}        resultsCountText
 * @return {string}
 */
export const getResultsCountText = (numberOfResults, resultsCountText) =>
  `${numberOfResults} ${resultsCountText}`;
