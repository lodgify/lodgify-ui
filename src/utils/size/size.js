/**
 * @param  {string|Array|Object} collection
 * @return {number}
 */
export const size = collection => {
  switch (true) {
    case typeof collection === 'string':
    case Array.isArray(collection):
      return collection.length;
    case collection instanceof Object:
      return Object.keys(collection).length;
    default:
      return 0;
  }
};
