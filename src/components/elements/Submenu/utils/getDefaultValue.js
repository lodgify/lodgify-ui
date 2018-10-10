/**
 * @typedef {Object} null
 * @param  {string}   children
 * @param  {Object[]} items
 * @param  {boolean}  isSelectedDisabled
 * @return {string|null}
 */
export const getDefaultValue = (children, items, isSelectedDisabled) => {
  /**
   * If
   * 1. there are no children, and
   * 2. there is at least one item, and
   * 3. the first item in items has a value property
   * 4. isSelectedDisabled is false
   */
  if (!children && items.length && items[0].value && !isSelectedDisabled) {
    return items[0].value;
  }

  return null;
};
