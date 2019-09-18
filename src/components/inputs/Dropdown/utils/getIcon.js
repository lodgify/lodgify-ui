import { ICON_NAMES } from 'elements/Icon';

import { isValueValid } from './isValueValid';

/**
 *
 * @param {any} value
 * @param {boolean} isClearable
 *
 * @returns {string}
 */
export const getIcon = (value, isClearable = true) =>
  isValueValid(value) && isClearable ? ICON_NAMES.CLOSE : ICON_NAMES.CARET_DOWN;
