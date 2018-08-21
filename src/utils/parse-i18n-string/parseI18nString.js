import { template } from 'lodash';

/**
 * @param {String} localeString
 * @param {Object} templateTags
 * @return {String}
 */
export const parseI18nString = (localeString, templateTags) => {
  try {
    return template(localeString, {
      interpolate: /{([\s\S]+?)}/g,
    })(templateTags);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error.message, 'A template tag has not been passed');
    return localeString;
  }
};
