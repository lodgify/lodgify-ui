/**
 * @param {Object[]} menuItems
 * @return {Object[]}
 */
export const getComponentTopCoordinates = menuItems => {
  const coordinates = menuItems.map(({ text, location }) => {
    const currentItem = document.querySelector(location);

    if (currentItem !== null) {
      return {
        top: Math.abs(currentItem.getBoundingClientRect().top),
        text,
      };
    }

    return {
      top: 0,
      text,
    };
  });

  return coordinates;
};
