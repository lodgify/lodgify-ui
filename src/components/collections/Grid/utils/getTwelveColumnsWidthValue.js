import { isNumber } from 'lodash';

import {
  SEMANTIC_FULL_WIDTH_COLUMN,
  COLUMNS,
  DEFAULT_COLUMN_WIDTH,
  DEFAULT_MAX_WIDTH,
} from '../constants';

export const getTwelveColumnsWidthValue = given12BasedWidth => {
  if (!isNumber(given12BasedWidth)) {
    return DEFAULT_COLUMN_WIDTH;
  }

  if (given12BasedWidth <= 0) {
    return DEFAULT_COLUMN_WIDTH;
  }

  if (given12BasedWidth > 12) {
    return DEFAULT_MAX_WIDTH;
  }

  return Math.floor(given12BasedWidth * SEMANTIC_FULL_WIDTH_COLUMN / COLUMNS);
};
