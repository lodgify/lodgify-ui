/**
 *  @param {String} guestsLabel
 *  @param {Number} guestsNumber
 *  @param {String} bedsLabel
 *  @param {Number} bedsNumber
 *  @returns {String}
 */
export const getRoomTypeDescription = (
  guestsLabel,
  guestsNumber,
  bedsLabel,
  bedsNumber
) => `${guestsLabel}: ${guestsNumber} | ${bedsLabel}: ${bedsNumber}`;
