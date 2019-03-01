import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsRequiredError } from './getIsRequiredError';

/**
 * @param  {Object} inputValidation
 * @param  {Object} inputState
 * @return {Object}
 */
export const getIsRequiredState = (inputValidation, inputState) => {
  const { isRequiredMessage, ...validation } = getValidationWithDefaults(
    inputValidation
  );
  const hasError = getIsRequiredError(validation, inputState);

  return { error: hasError ? isRequiredMessage : undefined };
};
