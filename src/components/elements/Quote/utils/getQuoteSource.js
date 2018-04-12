/**
 * Creates quote source from quote source and the quote's date and time
 * @param  {string} quoteSource   Name of the person being quoted
 * @param  {string} quoteDateTime Date and time
 * @return {string}               Name, Date and Time concatinated
 */

export const getQuoteSource = (quoteSource, quoteDateTime) =>
  `${quoteSource} (${quoteDateTime})`;
