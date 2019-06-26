import {
  NUMBER_OF_COLUMNS_ON_MOBILE,
  NUMBER_OF_COLUMNS_ON_LARGE_DEVICES,
} from './constants';

/**
 * @param  {boolean} isUserOnMobile
 * @return {number}
 */
export const getGridColumns = isUserOnMobile =>
  isUserOnMobile
    ? NUMBER_OF_COLUMNS_ON_MOBILE
    : NUMBER_OF_COLUMNS_ON_LARGE_DEVICES;
