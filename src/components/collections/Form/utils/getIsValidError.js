/**
 * @param  {Any}     value
 * @param  {Boolean} isValid
 * @param  {String}  [invalidMessage]
 * @return {String|Boolean}
 */
export const getIsValidError = (value, isValid, invalidMessage) => {
  const isValueInvalid = !!value && isValid === false;

  return isValueInvalid && (invalidMessage || true);
};
