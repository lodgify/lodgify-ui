import { getIsObjectEmpty } from './utils/getIsObjectEmpty';

/**
 * @param  {*}   collection
 * @param  {Function} predicate
 * @return {boolean}
 */
export const some = (collection, predicate) => {
  const isObject = typeof collection === 'object' && collection !== null;

  if (isObject && getIsObjectEmpty(collection)) {
    return false;
  }

  if (isObject && predicate !== undefined) {
    return Object.keys(collection).some(key => predicate(collection[key]));
  }

  return !!collection;
};
