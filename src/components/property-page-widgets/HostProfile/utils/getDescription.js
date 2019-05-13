import React from 'react';
import isValidHTML from 'is-html';

import { size } from 'utils/size';
import { HTML } from 'general-widgets/HTML';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';

/**
 * @typedef {Object} null
 * @param {string} description
 * @return {Object|null}
 */
export const getDescription = description =>
  size(description) > 0 ? (
    <GridColumn computer={7} mobile={12} tablet={12}>
      <Paragraph size="medium">
        {isValidHTML(description) ? (
          <HTML htmlString={description} />
        ) : (
          description
        )}
      </Paragraph>
    </GridColumn>
  ) : null;
