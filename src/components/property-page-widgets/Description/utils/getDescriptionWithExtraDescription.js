import React from 'react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';

import { formatParagraphWithModal } from './formatParagraphWithModal';
import { isDescriptionDisplayingWithEllipsis } from './isDescriptionDisplayingWithEllipsis';

/**
 * @param  {string} descriptionText
 * @param  {string} extraDescriptionText
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const getDescriptionWithExtraDescription = (
  descriptionText,
  extraDescriptionText,
  extraDescriptionButtonText
) =>
  getParagraphsFromStrings(descriptionText).map(
    (paragraphText, index, descriptionTextArray) => (
      <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
        {isDescriptionDisplayingWithEllipsis(
          index,
          descriptionTextArray,
          extraDescriptionText
        )
          ? formatParagraphWithModal(
              paragraphText,
              descriptionText,
              extraDescriptionText,
              extraDescriptionButtonText
            )
          : paragraphText}
      </Paragraph>
    )
  );
