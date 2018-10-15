/**
 * If
 * 1. there are no children, and
 * 2. there is at least one item, and
 * 3. the first item in items has a value property
 * 4. isSelectedDisabled is false
 *
 * @typedef {Object} null
 * @param  {string}   children
 * @param  {Object[]} items
 * @param  {boolean}  isSelectedDisabled
 * @return {Object}
 */
export const getDefaultValue = (children, items, isSelectedDisabled) =>
  !children && items.length && items[0].value && !isSelectedDisabled
    ? items[0].value
    : null;
