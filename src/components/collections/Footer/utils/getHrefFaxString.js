/**
 * @param  {string} faxNumber
 * @return {string}
 */
export const getHrefFaxString = faxNumber =>
  `fax:${faxNumber.replace(/\s/g, '')}`;
