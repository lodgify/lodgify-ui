/**
 * @param  {Object}  previousState
 * @param  {boolean} previousState.isActive
 * @return {Object}
 */
export const getToggledState = ({ isActive }) => ({ isActive: !isActive });
