import { isNil } from 'utils/is-nil';

/**
 * @param  {any} previousValue
 * @param  {any} value
 * @return {boolean}
 */
export const getIsInputValueReset = (previousValue, value) =>
  !isNil(previousValue) && value === null;
