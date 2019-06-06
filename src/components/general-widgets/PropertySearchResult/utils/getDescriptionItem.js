/**
 * @param {number} itemNumber
 * @param {string} itemText
 * @return {string}
 */
export const getDescriptionItem = (itemNumber, itemText) =>
  !!itemNumber && !!itemText ? ` · ${itemNumber} ${itemText}` : '';
