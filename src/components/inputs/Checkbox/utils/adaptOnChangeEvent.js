import get from 'get-value';

/**
 * @param  {Object} event
 * @param  {Object} target
 * @return {boolean|string}
 */
export const adaptOnChangeEvent = (event, target) => ({
  name: get(target, 'name'),
  value: get(target, 'checked'),
});
