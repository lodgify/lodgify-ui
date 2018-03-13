/**
 * @param  {Object|any} eventOrValue
 * @return {any}
 */
export const getValue = eventOrValue =>
  eventOrValue && eventOrValue.constructor.name === 'SyntheticEvent'
    ? eventOrValue.target.value
    : eventOrValue;
