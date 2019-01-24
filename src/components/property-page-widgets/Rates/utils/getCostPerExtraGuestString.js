/**
 * @param {string} cost
 * @param {string} costPerExtraGuestLabel
 * @return {string}
 */
export const getCostPerExtraGuestString = (cost, costPerExtraGuestLabel) =>
  `${cost} / ${costPerExtraGuestLabel}`;
