import { PRIMARY_CTA_WIDTH } from '../constants';

/**
 * @param {Object} primaryCTA
 * @return {number}
 */
export const getPrimaryCTAWidth = primaryCTA =>
  !!primaryCTA ? PRIMARY_CTA_WIDTH + primaryCTA.text.length : 0;
