import isValidHTML from 'is-html';
import React from 'react';

import { HTML } from 'general-widgets/HTML';
import { Paragraph } from 'typography/Paragraph';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { GridColumn } from 'layout/GridColumn';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

/**
 * @param  {string} locationDescription
 * @return {Object}
 */
export const getLocationDescription = locationDescription => (
  <GridColumn computer={6} tablet={12}>
    {isValidHTML(locationDescription) ? (
      <HTML htmlString={locationDescription} />
    ) : (
      getParagraphsFromStrings(locationDescription).map(
        (paragraphText, index) => (
          <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
            {paragraphText}
          </Paragraph>
        )
      )
    )}
  </GridColumn>
);
