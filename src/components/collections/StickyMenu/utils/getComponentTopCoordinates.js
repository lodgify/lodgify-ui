/**
 * @param {Object[]} menuItems
 * @return {Object[]}
 */
export const getComponentTopCoordinates = menuItems => {
  const coordinates = menuItems.map(({ text, link }) => {
    const currentItem = document.querySelector(link);

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
