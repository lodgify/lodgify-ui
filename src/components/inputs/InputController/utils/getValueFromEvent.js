import { get } from 'lodash';

/**
 * @param  {Object} event
 * @return {any}
 */
export const getValueFromEvent = event => get(event, ['target', 'value']);
