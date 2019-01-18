import React from 'react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param  {string} rule
 * @param  {number} index
 * @return {Object}
 */
export const getRuleMarkup = (rule, index) => (
  <Paragraph key={buildKeyFromStrings(rule, index)} size="medium">
    {rule}
  </Paragraph>
);
