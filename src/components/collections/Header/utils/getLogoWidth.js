import get from 'get-value';

/**
 * @typedef {Object} HTMLElement
 * @param   {HTMLElement} headerElement
 * @return  {number}
 */
export const getLogoWidth = headerElement => {
  const logoElement = get(headerElement, ['children', 0, 'childNodes', 0]);

  return logoElement ? logoElement.clientWidth : 0;
};
