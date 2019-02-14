import { isNil } from 'lodash';

/**
 * @param  {any} previousValue
 * @param  {any} value
 * @return {boolean}
 */
export const getIsInputValueReset = (previousValue, value) =>
  !isNil(previousValue) && value === null;
