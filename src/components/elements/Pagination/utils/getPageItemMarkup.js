import React from 'react';
import { Label } from 'semantic-ui-react';

/**
 * @param  {boolean} isShowingPageNumbers
 * @return {Object|undefined}
 */
export const getPageItemMarkup = isShowingPageNumbers =>
  isShowingPageNumbers ? (
    undefined
  ) : (
    <Label circular content={null} empty size="tiny" />
  );
