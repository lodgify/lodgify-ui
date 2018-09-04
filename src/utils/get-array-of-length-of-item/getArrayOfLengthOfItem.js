import { fill } from 'lodash';

/**
 * Returns a new array:
 * - of the required `length`; and
 * - filled with the required `item`.
 * @param  {number} length
 * @param  {any}    item
 * @return {any[]}
 */
export const getArrayOfLengthOfItem = (length, item) =>
  fill(Array(length), item);
