/**
 * @typedef {Object} null
 * @param   {string|null|undefined} controlledFocusedInput
 * @param   {string|null} uncontrolledFocusedInput
 * @return  {string|null}
 */
export const getFocusedInput = (
  controlledFocusedInput,
  uncontrolledFocusedInput
) =>
  typeof controlledFocusedInput === 'undefined'
    ? uncontrolledFocusedInput
    : controlledFocusedInput;
