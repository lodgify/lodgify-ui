import { MAXIMUM_WINDOW_HEIGHT_FOR_MODAL_CALENDAR } from './constants';

/**
 * @param {number} windowHeight
 * @return boolean
 */
export const isDisplayedAsModal = windowHeight =>
  windowHeight < MAXIMUM_WINDOW_HEIGHT_FOR_MODAL_CALENDAR;
