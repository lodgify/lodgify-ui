/**
 * @param  {String} quoteSource
 * @param  {String} quoteDateTime
 * @return {String}
 */

export const getQuoteSource = (quoteSource, quoteDateTime) =>
  `${quoteSource} (${quoteDateTime})`;
