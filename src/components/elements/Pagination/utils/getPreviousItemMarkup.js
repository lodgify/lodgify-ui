import { previousItem, previousItemOutlined } from './navigationMarkup';

/**
 * @param  {boolean} isShowingPageNumbers
 * @return {Object}
 */
export const getPreviousItemMarkup = isShowingPageNumbers =>
  isShowingPageNumbers ? previousItemOutlined : previousItem;
