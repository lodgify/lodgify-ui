/**
 * @param  {Object}    validation
 * @param  {Function}  validation.getIsEmpty
 * @param  {boolean}   validation.isRequired
 * @param  {Object}    [inputState={}]
 * @param  {any}       [inputState.value]
 * @return {boolean}
 */
export const getIsRequiredError = (
  { getIsEmpty, isRequired },
  { value } = {}
) => isRequired && getIsEmpty(value);
