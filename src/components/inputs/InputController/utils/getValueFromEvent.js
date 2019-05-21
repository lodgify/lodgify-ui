import get from 'get-value';

/**
 * @param  {Object} event
 * @return {any}
 */
export const getValueFromEvent = event => get(event, ['target', 'value']);
