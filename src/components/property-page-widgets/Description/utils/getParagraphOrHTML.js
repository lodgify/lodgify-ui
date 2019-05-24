import React from 'react';
import isValidHTML from 'is-html';

import { HTML } from 'general-widgets/HTML';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * @param  {string} string
 * @return {Object}
 */
export const getParagraphOrHTML = string =>
  isValidHTML(string) ? (
    <HTML htmlString={string} />
  ) : (
    getParagraphsFromStrings(string).map((paragraphString, index) => (
      <Paragraph key={buildKeyFromStrings(paragraphString, index)}>
        {paragraphString}
      </Paragraph>
    ))
  );
