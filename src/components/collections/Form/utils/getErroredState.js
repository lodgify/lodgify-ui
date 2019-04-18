import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsRequiredError } from './getIsRequiredError';
import { getIsValidError } from './getIsValidError';

/**
 * @param  {Object} inputValidation
 * @param  {Object} inputState
 * @return {Object}
 */
export const getErroredState = (inputValidation, inputState) => {
  const {
    isRequiredMessage,
    isRequired,
    invalidMessage,
    getIsValid,
    getIsEmpty,
  } = getValidationWithDefaults(inputValidation);
  const isRequiredError = getIsRequiredError(
    { isRequired, getIsEmpty },
    inputState,
    isRequiredMessage
  );

  const isValid = !getIsEmpty(inputState.value) && getIsValid(inputState.value);
  const isValidError = getIsValidError(
    inputState.value,
    isValid,
    invalidMessage
  );

  const error = isRequiredError ? isRequiredMessage : isValidError;

  return {
    ...inputState,
    isValid,
    error,
  };
};
