import { CHARACTER_WIDTH, ICON_OFFSET } from '../constants';

/**
 * @param  {boolean} isSearchable
 * @param  {Object[]}  items
 * @return {Object}
 */
export const getMinWidth = (isSearchable, items) => {
  if (!isSearchable) return;

  const longestItem = items.reduce(
    (accumulator, { text }) =>
      accumulator.length > text.length ? accumulator : text,
    ''
  );

  return {
    minWidth: longestItem.length * CHARACTER_WIDTH + ICON_OFFSET,
  };
};
