/**
 * @typedef {Object} null
 * @param  {string|boolean|null}  prevFocusedState
 * @param  {string|boolean|null}  focusedState
 * @return {boolean}
 */
export const isBlurEvent = (prevFocusedState, focusedState) =>
  !!prevFocusedState && !focusedState;
