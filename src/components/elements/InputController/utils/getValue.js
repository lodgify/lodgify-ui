import { get } from 'lodash';

/**
 * @param  {Object|any} eventOrValue
 * @return {any}
 */
export const getValue = eventOrValue =>
  get(eventOrValue, ['target', 'value']) || eventOrValue;
