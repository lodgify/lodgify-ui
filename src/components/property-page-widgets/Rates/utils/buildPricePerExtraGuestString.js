/**
 * @param {string} cost
 * @param {string} costPerExtraGuestLabel
 * @return {string}
 */
export const buildPricePerExtraGuestString = (cost, costPerExtraGuestLabel) =>
  `${cost} / ${costPerExtraGuestLabel}`;
