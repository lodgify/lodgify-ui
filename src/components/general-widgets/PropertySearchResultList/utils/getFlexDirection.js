/**
 * @param  {boolean} isUserOnMobile
 * @return {string|undefined}
 */
export const getFlexDirection = isUserOnMobile =>
  isUserOnMobile ? 'column' : undefined;
