import React from 'react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';

export const getParagraphMarkup = paragraphString =>
  getParagraphsFromStrings(paragraphString).map((paragraphString, index) => (
    <Paragraph key={buildKeyFromStrings(paragraphString, index)}>
      {paragraphString}
    </Paragraph>
  ));
