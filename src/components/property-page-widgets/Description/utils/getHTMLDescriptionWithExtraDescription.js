import React, { Fragment } from 'react';

import { HTML } from 'general-widgets/HTML';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';

import { getExtraDescriptionModal } from './getExtraDescriptionModal';

/**
 * @param  {string} descriptionText
 * @param  {string} extraDescriptionText
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const getHTMLDescriptionWithExtraDescription = (
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
      <HTML htmlString={descriptionText} />
      {getExtraDescriptionModal(extraDescription, extraDescriptionButtonText)}
    </Fragment>
  );
};
