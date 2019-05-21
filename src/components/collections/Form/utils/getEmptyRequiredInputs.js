import { pickBy } from 'utils/pick-by';

import { getValidationWithDefaults } from './getValidationWithDefaults';
import { getIsRequiredError } from './getIsRequiredError';

/**
 * @param  {Object} inputsValidation
 * @param  {Object} inputsState
 * @return {Object}
 */
export const getEmptyRequiredInputs = (inputsValidation, inputsState) =>
  pickBy(inputsValidation, (inputValidation, inputName) => {
    const validation = getValidationWithDefaults(inputValidation);

    return getIsRequiredError(validation, inputsState[inputName]);
  });
