import isEqual from 'fast-deep-equal';

import { getErroredState } from './getErroredState';
import { setInputState } from './setInputState';

/**
 * @param {Object} form
 * @param {string} inputName
 * @param {Object} inputState
 * @param {string} previousInputState
 */
export const getFormInputsState = (
  form,
  inputName,
  inputState,
  previousInputState = {}
) => {
  switch (true) {
    case isEqual(previousInputState, inputState):
      return;
    case !previousInputState.isBlurred && inputState.isBlurred:
    case inputState.isBlurred && previousInputState.value !== inputState.value:
      const errorState = getErroredState(
        form.props.validation[inputName],
        inputState
      );

      setInputState(form, inputName, errorState);
      return;
    case previousInputState.value !== inputState.value:
      setInputState(form, inputName, {
        error: undefined,
        isValid: undefined,
      });
      return;
    default:
      break;
  }
};
