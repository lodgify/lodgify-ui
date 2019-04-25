import React, { Fragment } from 'react';

import { HTML } from 'general-widgets/HTML';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { isDescriptionDisplayingWithEllipsis } from './isDescriptionDisplayingWithEllipsis';
import { getParagraphWithEllipsis } from './getParagraphWithEllipsis';
import { getExtraDescriptionModal } from './getExtraDescriptionModal';

/**
 * @param  {string} descriptionText
 * @param  {string} extraDescriptionText
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const getDescriptionWithHTMLExtraDescription = (
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
        ) ? (
          <Fragment>
            {getParagraphWithEllipsis(paragraphText)}
            {getExtraDescriptionModal(
              <HTML htmlString={extraDescriptionText} />,
              extraDescriptionButtonText
            )}
          </Fragment>
        ) : (
          paragraphText
        )}
      </Paragraph>
    )
  );
