import { nextItem, nextItemOutlined } from './navigationMarkup';

/**
 * @param  {boolean} isShowingPageNumbers
 * @return {Object}
 */
export const getNextItemMarkup = isShowingPageNumbers =>
  isShowingPageNumbers ? nextItemOutlined : nextItem;
