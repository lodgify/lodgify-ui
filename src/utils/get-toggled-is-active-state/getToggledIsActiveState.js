/**
 * @param  {Object}  previousState
 * @param  {boolean} previousState.isActive
 * @return {Object}
 */
export const getToggledIsActiveState = ({ isActive }) => ({
  isActive: !isActive,
});
