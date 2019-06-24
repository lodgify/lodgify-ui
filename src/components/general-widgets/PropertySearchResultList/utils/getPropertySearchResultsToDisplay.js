import { getFirstPropertyIndexOfActivePage } from './getFirstPropertyIndexOfActivePage';
import { getLastPropertyPositionOfActivePage } from './getLastPropertyPositionOfActivePage';

/**
 * @param  {number} activePage
 * @param  {Object[]} properties
 * @return {Object[]}
 */
export const getPropertySearchResultsToDisplay = (activePage, properties) =>
  properties.slice(
    getFirstPropertyIndexOfActivePage(activePage),
    getLastPropertyPositionOfActivePage(activePage)
  );
