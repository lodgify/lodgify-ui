/**
 * @param  {string} telNumber
 * @return {string}
 */
export const getHrefTelString = telNumber =>
  `tel:${telNumber.replace(/\s/g, '')}`;
