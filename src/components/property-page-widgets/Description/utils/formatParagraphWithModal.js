import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

import { Modal } from 'elements/Modal';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Paragraph } from 'typography/Paragraph';

import { getParagraphWithEllipsis } from './getParagraphWithEllipsis';

/**
 * @param  {String} paragraphText
 * @param  {String} descriptionText
 * @param  {String} extraDescriptionText
 * @return {Object}
 */
export const formatParagraphWithModal = (
  paragraphText,
  descriptionText,
  extraDescriptionText
) => (
  <Fragment>
    {getParagraphWithEllipsis(paragraphText)}
    <Modal trigger={<Button basic>View more</Button>}>
      {getParagraphsFromStrings(descriptionText, extraDescriptionText).map(
        (paragraphText, index) => (
          <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
            {paragraphText}
          </Paragraph>
        )
      )}
    </Modal>
  </Fragment>
);
