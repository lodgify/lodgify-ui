/**
 * @param {number} currentIndex
 * @param {number} navigationLength
 * @param {boolean} hasFinalCTA
 */
export const getSubmenuPointing = (
  currentIndex,
  navigationLength,
  hasFinalCTA
) => {
  const actualNavigationLength = hasFinalCTA
    ? navigationLength + 1
    : navigationLength;

  return currentIndex + 1 === actualNavigationLength ? 'top right' : 'top left';
};
