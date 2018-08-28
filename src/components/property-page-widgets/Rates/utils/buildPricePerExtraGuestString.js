/**
 * @param {String} cost
 * @param {String} costPerExtraGuestLabel
 * @return {String}
 */
export const buildPricePerExtraGuestString = (cost, costPerExtraGuestLabel) =>
  `${cost} / ${costPerExtraGuestLabel}`;
