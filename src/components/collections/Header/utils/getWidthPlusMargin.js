/**
 * @typedef {Object}      HTMLElement
 * @param   {HTMLElement} element
 * @return  {number}
 */
export const getWidthPlusMargin = element => {
  const { marginLeft, marginRight } = global.getComputedStyle(element);

  return element.clientWidth + parseInt(marginLeft) + parseInt(marginRight);
};
