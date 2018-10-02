/**
 * @param {boolean} isSelectedDisabled
 */
export const getValueProperty = isSelectedDisabled =>
  isSelectedDisabled
    ? {
        value: -999,
      }
    : {};
