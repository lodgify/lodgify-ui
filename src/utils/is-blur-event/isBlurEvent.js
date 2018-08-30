/**
 * @param  {String|Boolean|null}  prevFocusedState
 * @param  {String|Boolean|null}  focusedState
 * @return {Boolean}
 */
export const isBlurEvent = (prevFocusedState, focusedState) =>
  !!prevFocusedState && !focusedState;
