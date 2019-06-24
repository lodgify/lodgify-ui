import { getFirstPropertyIndexOfActivePage } from './getFirstPropertyIndexOfActivePage';

/**
 * @param  {number} activePage
 * @return {number}
 */
export const getFirstPropertyPositionOfActivePage = activePage =>
  getFirstPropertyIndexOfActivePage(activePage) + 1;
