/**
 * @param {Object} component
 * @param {string} inputName
 * @param {Object} nextInputState
 */
export const setInputState = (component, inputName, nextInputState) =>
  component.setState(previousState => ({
    [inputName]: { ...previousState[inputName], ...nextInputState },
  }));
