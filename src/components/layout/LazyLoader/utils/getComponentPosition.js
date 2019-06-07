/**
 * @param {Object} component
 * @return {Object}
 */
export const getComponentPosition = component =>
  !!component ? component.getBoundingClientRect() : undefined;
