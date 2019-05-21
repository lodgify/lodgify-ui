import get from 'get-value';

/**
 * Get the width prop from the input.
 * @param  {string|Object} input
 * @return {string|undefined}
 */
export const getInputWidth = input => get(input, ['props', 'width']);
