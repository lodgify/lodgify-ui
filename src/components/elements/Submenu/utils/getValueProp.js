/**
 * @param {boolean} isSelectedDisabled
 */
export const getValueProp = isSelectedDisabled =>
  isSelectedDisabled
    ? {
        value: -999,
      }
    : {};
