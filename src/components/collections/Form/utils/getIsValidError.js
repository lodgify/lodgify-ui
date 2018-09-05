/**
 * @param  {any}     value
 * @param  {boolean} isValid
 * @param  {string}  [invalidMessage]
 * @return {string|boolean}
 */
export const getIsValidError = (value, isValid, invalidMessage) => {
  const isValueInvalid = !!value && isValid === false;

  return isValueInvalid && (invalidMessage || true);
};
