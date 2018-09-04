/**
 * @typedef {Object} null
 * @param  {string}   children
 * @param  {Object[]} items
 * @return {string|null}
 */
export const getDefaultValue = (children, items) => {
  /**
   * If
   * 1. there are no children, and
   * 2. there is at least one item, and
   * 3. the first item in items has a value property
   */
  if (!children && items.length && items[0].value) {
    return items[0].value;
  }

  return null;
};
