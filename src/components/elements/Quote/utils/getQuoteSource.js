/**
 * @param  {string} quoteSource
 * @param  {string} quoteDateTime
 * @return {string}
 */
export const getQuoteSource = (quoteSource, quoteDateTime) =>
  `${quoteSource} (${quoteDateTime})`;
