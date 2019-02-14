/**
 * @param  {boolean|number|string|undefined} controlledValue
 * @param  {boolean|number|string|undefined} initialValue
 * @param  {boolean|number|string} value
 * @return {boolean|number|string}
 */
export const getControlledInputValue = (
  controlledValue,
  initialValue,
  value
) => {
  if (typeof controlledValue === 'undefined') return value;

  if (controlledValue === null) return initialValue;

  return controlledValue;
};
