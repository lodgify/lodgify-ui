import { some } from 'lodash';

/**
 * @param  {Object} inputsState
 * @return {boolean}
 */
export const getIsSubmitButtonDisabled = inputsState =>
  some(inputsState, inputState => !!inputState.error);
