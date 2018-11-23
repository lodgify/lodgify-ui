import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsRequiredError } from './getIsRequiredError';

/**
 * @param {Function} setState
 * @param {Object}   fieldValidation
 * @param {string}   name
 * @param {Object}   [inputState={}]
 * @param {any}      [inputState.value]
 */
export const getIsRequiredErrorThenSetState = (
  setState,
  fieldValidation,
  name,
  inputState = {}
) => {
  const { isRequiredMessage, ...validation } = getValidationWithDefaults(
    fieldValidation
  );
  const hasError = getIsRequiredError(validation, inputState);

  if (hasError) {
    setState({
      [name]: {
        error: isRequiredMessage,
      },
    });
  }

  return hasError;
};
