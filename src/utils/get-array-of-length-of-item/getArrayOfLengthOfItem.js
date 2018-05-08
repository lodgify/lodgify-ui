import { fill } from 'lodash';

/**
 * Returns a new array:
 * - of the required `length`; and
 * - filled with the required `item`.
 * @param  {Number} length
 * @param  {Any}    item
 * @return {Any[]}
 */
export const getArrayOfLengthOfItem = (length, item) =>
  fill(Array(length), item);
