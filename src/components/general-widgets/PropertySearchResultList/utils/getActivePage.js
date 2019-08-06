/**
 * @param  {number|string} propsActivePage
 * @param  {number|string} stateActivePage
 * @return {number|string}
 */
export const getActivePage = (propsActivePage, stateActivePage) =>
  typeof propsActivePage === 'undefined' ? stateActivePage : propsActivePage;
