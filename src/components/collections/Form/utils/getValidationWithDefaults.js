/**
 * @param  {Object}   [validation={}]
 * @param  {Function} [validation.getIsEmpty=value => !value]
 * @param  {Function} [validation.getIsValid=Function.prototype]
 * @param  {Object}   [validation.rest]
 * @return {Object}
 */
export const getValidationWithDefaults = ({
  getIsEmpty = value => !value,
  getIsValid = Function.prototype,
  ...rest
} = {}) => ({
  getIsEmpty,
  getIsValid,
  ...rest,
});
