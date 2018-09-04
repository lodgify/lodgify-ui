import { DEFAULT_IS_REQUIRED_MESSAGE } from '../constants';

/**
 * @param  {Object}   [validation={}]
 * @param  {Function} [validation.getIsEmpty=value => !value]
 * @param  {Function} [validation.getIsValid=Function.prototype]
 * @param  {string}   [validation.isRequiredMessage=DEFAULT_IS_REQUIRED_MESSAGE]
 * @param  {Object}   [validation.rest]
 * @return {Object}
 */
export const getValidationWithDefaults = ({
  getIsEmpty = value => !value,
  getIsValid = Function.prototype,
  isRequiredMessage = DEFAULT_IS_REQUIRED_MESSAGE,
  ...rest
} = {}) => ({
  getIsEmpty,
  getIsValid,
  isRequiredMessage,
  ...rest,
});
