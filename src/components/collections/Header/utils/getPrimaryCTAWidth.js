import { CTA_MARGIN_WIDTH, CHARACTER_WIDTH } from '../constants';

/**
 * @param {Object} primaryCTA
 * @return {number}
 */
export const getPrimaryCTAWidth = primaryCTA =>
  !!primaryCTA
    ? CTA_MARGIN_WIDTH + primaryCTA.text.length * CHARACTER_WIDTH
    : 0;
