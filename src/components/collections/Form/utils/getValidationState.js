import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsValidError } from './getIsValidError';

/**
 * @param  {Object} inputValidation
 * @param  {any}    inputValue
 * @return {Object}
 */
export const getValidationState = (inputValidation, inputValue) => {
  const { invalidMessage, getIsValid } = getValidationWithDefaults(
    inputValidation
  );
  const isValid = getIsValid(inputValue);
  const error = getIsValidError(inputValue, isValid, invalidMessage);

  return { error, isValid };
};
