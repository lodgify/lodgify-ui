import { get } from 'lodash';

/**
 * Get the width prop from the input.
 * @param  {String|Object} input
 * @return {String|undefined}
 */
export const getInputWidth = input => get(input, ['props', 'width']);
