import { get } from 'lodash';

/**
 * @typedef {Object} HTMLElement
 * @param   {HTMLElement} headerElement
 * @return  {number}
 */
export const getMenuWidth = headerElement => {
  const menuElement = get(headerElement, ['children', 0]);

  return menuElement ? menuElement.clientWidth : 0;
};
