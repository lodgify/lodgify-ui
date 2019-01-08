import { add } from 'lodash';

import { HEADER_MAX_WIDTH } from '../constants';

import { getNavigationItemsWidth } from './getNavigationItemsWidth';
import { getPrimaryCTAWidth } from './getPrimaryCTAWidth';

/**
 * @param  {Array}  navigationItems
 * @param  {Object} primaryCTA
 * @return {boolean}
 */
export const areNavigationItemsExceedingHeaderMaxWidth = (
  navigationItems,
  primaryCTA
) =>
  add(
    getNavigationItemsWidth(navigationItems),
    getPrimaryCTAWidth(primaryCTA)
  ) > HEADER_MAX_WIDTH;
