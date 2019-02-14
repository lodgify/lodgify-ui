/**
 * @param  {Object} state
 * @return {Object}
 */
export const getEmptyState = state =>
  Object.keys(state).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: {
        value: null,
      },
    }),
    {}
  );
