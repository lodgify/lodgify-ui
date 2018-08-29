import { some } from 'lodash';

/**
 * @param  {Object} inputsState
 * @return {Boolean}
 */
export const getIsSubmitButtonDisabled = inputsState =>
  some(inputsState, inputState => !!inputState.error);
