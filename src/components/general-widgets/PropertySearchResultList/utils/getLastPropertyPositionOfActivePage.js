import { NUMBER_OF_PROPERTIES_PER_PAGE } from '../constants';

/**
 * @param  {number} activePage
 * @param  {number} numberOfProperties
 * @return {number}
 */
export const getLastPropertyPositionOfActivePage = (
  activePage,
  numberOfProperties
) =>
  NUMBER_OF_PROPERTIES_PER_PAGE * activePage > numberOfProperties
    ? numberOfProperties
    : NUMBER_OF_PROPERTIES_PER_PAGE * activePage;
