import {
  SHOWING_NUMBER_OF_PLACES,
  FIRST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER,
  LAST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER,
  TOTAL_ITEM_NUMBER_PLACEHOLDER,
} from 'utils/default-strings';

/**
 * @param  {number} activePageFirstItemPosition
 * @param  {number} activePageLastItemPosition
 * @param  {number} numberOfProperties
 * @return {string}
 */
export const getShowingResultsText = (
  activePageFirstItemPosition,
  activePageLastItemPosition,
  numberOfProperties
) =>
  SHOWING_NUMBER_OF_PLACES.replace(
    FIRST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER,
    activePageFirstItemPosition
  )
    .replace(LAST_ITEM_OF_PAGE_NUMBER_PLACEHOLDER, activePageLastItemPosition)
    .replace(TOTAL_ITEM_NUMBER_PLACEHOLDER, numberOfProperties);
