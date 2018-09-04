/**
 *  @param {number} guestsNumber
 *  @param {number} bedroomsNumber
 *  @returns {string}
 */
export const getPropertyDescription = (guestsNumber, bedroomsNumber) =>
  `Guests: ${guestsNumber}${
    bedroomsNumber ? ` | Bedrooms: ${bedroomsNumber}` : ''
  }`;
