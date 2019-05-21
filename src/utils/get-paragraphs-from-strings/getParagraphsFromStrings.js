import 'array-flat-polyfill';

import { NEW_LINE_REGEX } from './constants';

/**
 * Takes any number of strings, finds newlines and
 * returns a single array of the separate paragraphs in the strings.
 * @param  {...string} strings
 * @return {string[]}
 */
export const getParagraphsFromStrings = (...strings) =>
  strings
    .map(string =>
      string
        .split(NEW_LINE_REGEX)
        .map(subString => subString.trim())
        .filter(subString => subString && !subString.match(NEW_LINE_REGEX))
    )
    .flat();
