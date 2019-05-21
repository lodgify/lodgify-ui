/**
 * @param  {Object}   collection
 * @param  {Function} iteratee
 * @return {Array|*}
 */
export const forEach = (collection, iteratee = Function.prototype) => {
  if (typeof collection === 'object' && collection !== null) {
    Object.keys(collection).map(key => {
      return iteratee(collection[key], key);
    });
  }

  return collection;
};
