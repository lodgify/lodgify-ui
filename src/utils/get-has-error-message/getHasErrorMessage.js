/**
 * @param  {boolean|string}  error
 * @return {boolean}
 */
export const getHasErrorMessage = error => !!error && typeof error === 'string';
