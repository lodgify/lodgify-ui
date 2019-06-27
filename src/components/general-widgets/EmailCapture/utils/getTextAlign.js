import { MOBILE_ALIGNMENT, LARGE_DEVICE_ALIGNMENT } from './constants';

/**
 * @param  {boolean} isUserOnMobile
 * @return {string}
 */
export const getTextAlign = isUserOnMobile =>
  isUserOnMobile ? MOBILE_ALIGNMENT : LARGE_DEVICE_ALIGNMENT;
