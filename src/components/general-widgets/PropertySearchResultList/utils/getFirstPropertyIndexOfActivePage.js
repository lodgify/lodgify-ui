import { NUMBER_OF_PROPERTIES_PER_PAGE } from '../constants';

/**
 * @param  {number} activePage
 * @return {number}
 */
export const getFirstPropertyIndexOfActivePage = activePage =>
  NUMBER_OF_PROPERTIES_PER_PAGE * activePage - NUMBER_OF_PROPERTIES_PER_PAGE;
