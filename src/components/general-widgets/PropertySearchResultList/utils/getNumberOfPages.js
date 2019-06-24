import { NUMBER_OF_PROPERTIES_PER_PAGE } from '../constants';

/**
 * @param  {number} numberOfProperties
 * @return {number}
 */
export const getNumberOfPages = numberOfProperties =>
  Math.ceil(numberOfProperties / NUMBER_OF_PROPERTIES_PER_PAGE);
