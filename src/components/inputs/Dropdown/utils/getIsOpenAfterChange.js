/**
 * @param  {string} key
 * @return {boolean}
 */
export const getIsOpenAfterChange = key =>
  ['ArrowDown', 'ArrowUp'].includes(key) ? true : false;
