import { flatten } from 'lodash';

const newLineRegularExpression = /(\r\n|\r|\n)/;

/**
 * Takes any number of strings, finds newlines and
 * returns a single array of the separate paragraphs in the strings.
 * @param  {...String} strings
 * @return {String[]}
 */
export const getParagraphsFromStrings = (...strings) =>
  flatten(
    strings.map(string =>
      string
        .split(newLineRegularExpression)
        .map(subString => subString.trim())
        .filter(
          subString => subString && !subString.match(newLineRegularExpression)
        )
    )
  );
