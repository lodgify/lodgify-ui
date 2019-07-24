import en from 'react-phone-number-input/locale/en.json';

/**
 * @param  {Object} countryNames
 * @return {Object}
 */
export const getLabels = countryNames => ({
  ...en,
  ...countryNames,
});
