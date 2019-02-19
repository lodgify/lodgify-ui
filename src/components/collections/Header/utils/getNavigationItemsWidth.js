import { get } from 'lodash';

import { getWidthPlusMargin } from './getWidthPlusMargin';

/**
 * @typedef {Object}      HTMLElement
 * @param   {HTMLElement} headerElement
 * @return  {number}
 */
export const getNavigationItemsWidth = headerElement => {
  const navigationElement = get(headerElement, ['children', 0, 'children', 1]);

  return navigationElement
    ? Array.from(navigationElement.children).reduce(
        (accumulator, navigationItem) =>
          accumulator + getWidthPlusMargin(navigationItem),
        0
      )
    : 0;
};
