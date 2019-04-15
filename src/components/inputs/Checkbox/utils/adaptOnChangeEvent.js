import { get } from 'lodash';

/**
 * @param  {Object} event
 * @param  {Object} target
 * @return {boolean|string}
 */
export const adaptOnChangeEvent = (event, target) => get(target, 'checked');
