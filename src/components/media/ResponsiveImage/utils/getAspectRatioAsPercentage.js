import { isNumber } from 'lodash';

import { getLowestCommonDenominator } from './getLowestCommonDenominator';

/**
 * @param  {number} width
 * @param  {number} height
 * @return {number|undefined}
 */
export const getAspectRatioAsPercentage = (width, height) => {
  if (isNumber(width) && isNumber(height)) {
    const lowestCommonDenominator = getLowestCommonDenominator(width, height);

    const heightAspect = height / lowestCommonDenominator;
    const widthAspect = width / lowestCommonDenominator;

    return (heightAspect / widthAspect) * 100;
  }
};
