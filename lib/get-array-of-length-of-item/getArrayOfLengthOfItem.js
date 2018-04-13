import { fill } from 'lodash';

/**
 * @param  {Number} length
 * @param  {Any}    item
 * @return {Any[]}
 */
export const getArrayOfLengthOfItem = (length, item) =>
  fill(Array(length), item);
