/**
 * @param {String} cost
 * @param {String} pricePerExtraText
 * @return {String}
 */
export const buildPricePerExtraGuestString = (cost, pricePerExtraText) =>
  `${cost} / ${pricePerExtraText}`;
