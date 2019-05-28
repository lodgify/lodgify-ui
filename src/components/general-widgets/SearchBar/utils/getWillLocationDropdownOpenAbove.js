/**
 * @param  {Object} element
 * @param  {boolean} defaultValue
 * @return {boolean}
 */
export const getWillLocationDropdownOpenAbove = (element, defaultValue) => {
  if (!element || !element.getBoundingClientRect) return defaultValue;

  return element.getBoundingClientRect().top > 450;
};
