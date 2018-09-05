/**
 *  @param {string} guestsLabel
 *  @param {number} guestsNumber
 *  @param {string} bedsLabel
 *  @param {number} bedsNumber
 *  @returns {string}
 */
export const getRoomTypeDescription = (
  guestsLabel,
  guestsNumber,
  bedsLabel,
  bedsNumber
) => `${guestsLabel}: ${guestsNumber} | ${bedsLabel}: ${bedsNumber}`;
