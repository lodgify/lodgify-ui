import { isString } from 'lodash';

/**
 * Is there an error and is it a string.
 * @param  {Boolean|String}  error
 * @return {Boolean}
 */
export const hasErrorMessage = error => !!error && isString(error);
