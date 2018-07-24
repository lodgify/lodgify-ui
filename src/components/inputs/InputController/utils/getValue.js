import { get, isUndefined } from 'lodash';

/**
 * @param  {Object|any} eventOrValue
 * @return {any}
 */
export const getValue = eventOrValue => {
  const nestedValue = get(eventOrValue, ['target', 'value']);

  return !isUndefined(nestedValue) ? nestedValue : eventOrValue;
};
