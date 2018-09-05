import { isString } from 'lodash';

/**
 * Is there an error and is it a string.
 * @param  {boolean|string}  error
 * @return {boolean}
 */
export const getHasErrorMessage = error => !!error && isString(error);
