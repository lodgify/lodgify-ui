/**
 * @param  {Object}    validation
 * @param  {Function}  validation.getIsEmpty
 * @param  {Boolean}   validation.isRequired
 * @param  {Object}    [inputState={}]
 * @param  {Any}       [inputState.value]
 * @return {Boolean}
 */
export const getIsRequiredError = (
  { getIsEmpty, isRequired },
  { value } = {}
) => isRequired && getIsEmpty(value);
