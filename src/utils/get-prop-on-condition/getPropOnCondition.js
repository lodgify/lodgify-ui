/**
 * @param  {any} prop
 * @param  {boolean} condition
 * @return {any|undefined}
 */
export const getPropOnCondition = (prop, condition) =>
  condition ? prop : undefined;
