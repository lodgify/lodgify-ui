/**
 * @param  {Object}    collection
 * @param  {Function} [predicate=Function.prototype]
 * @return {Object}
 */
export const pickBy = (collection, predicate = Function.prototype) =>
  typeof collection === 'object' && collection !== null
    ? Object.keys(collection).reduce(
        (previousValue, currentValue) =>
          predicate(collection[currentValue], currentValue)
            ? {
                ...previousValue,
                [currentValue]: collection[currentValue],
              }
            : previousValue,
        {}
      )
    : collection;
