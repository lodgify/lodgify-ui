import { getComponentTopCoordinates } from './getComponentTopCoordinates';

/**
 * @param {Object[]} menuItems
 * @return {string}
 */
export const getActiveOnScroll = menuItems => {
  const topCoordinates = getComponentTopCoordinates(menuItems).map(
    item => item.top
  );

  const closestComponent = getComponentTopCoordinates(menuItems).filter(
    item => item.top === Math.min.apply(Math, topCoordinates)
  );

  return closestComponent[0].text;
};
