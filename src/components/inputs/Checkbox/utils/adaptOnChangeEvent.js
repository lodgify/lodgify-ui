import get from 'get-value';

/**
 * @param  {Object} event
 * @param  {Object} target
 * @return {boolean|string}
 */
export const adaptOnChangeEvent = (event, target) => get(target, 'checked');
