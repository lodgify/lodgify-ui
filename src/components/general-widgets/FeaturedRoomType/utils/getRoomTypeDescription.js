/**
 * @typedef  {Object} null
 *  @param   {string} guestsLabel
 *  @param   {number} guestsNumber
 *  @param   {string} bedsLabel
 *  @param   {number} bedsNumber
 *  @returns {string|null}
 */
export const getRoomTypeDescription = (
  guestsLabel,
  guestsNumber,
  bedsLabel,
  bedsNumber
) => {
  if (bedsNumber !== undefined && guestsNumber !== undefined) {
    return `${guestsLabel}: ${guestsNumber} | ${bedsLabel}: ${bedsNumber}`;
  }

  if (bedsNumber !== undefined) {
    return `${bedsLabel}: ${bedsNumber}`;
  }

  if (guestsNumber !== undefined) {
    return `${guestsLabel}: ${guestsNumber}`;
  }

  return null;
};
