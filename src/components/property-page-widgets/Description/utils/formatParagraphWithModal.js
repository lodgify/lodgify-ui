import React, { Fragment } from 'react';

import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Paragraph } from 'typography/Paragraph';

import { getParagraphWithEllipsis } from './getParagraphWithEllipsis';
import { getExtraDescriptionModal } from './getExtraDescriptionModal';

/**
 * @param  {string} paragraphText
 * @param  {string} descriptionText
 * @param  {string} extraDescriptionText
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const formatParagraphWithModal = (
  paragraphText,
  descriptionText,
  extraDescriptionText,
  extraDescriptionButtonText
) => {
  const extraDescription = getParagraphsFromStrings(
    descriptionText,
    extraDescriptionText
  ).map((paragraphText, index) => (
    <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
      {paragraphText}
    </Paragraph>
  ));

  return (
    <Fragment>
      {getParagraphWithEllipsis(paragraphText)}
      {getExtraDescriptionModal(extraDescription, extraDescriptionButtonText)}
    </Fragment>
  );
};
