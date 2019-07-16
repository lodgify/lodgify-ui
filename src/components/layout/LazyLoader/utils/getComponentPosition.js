/**
 * @param {Object} component
 * @return {undefined|Object}
 */
export const getComponentPosition = component => {
  if (!component) return;

  if (!component.offsetParent) return;

  return component.getBoundingClientRect();
};
