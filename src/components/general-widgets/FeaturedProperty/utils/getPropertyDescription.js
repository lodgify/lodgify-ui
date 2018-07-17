/**
 *  @param {Number} guestsNumber
 *  @param {Number} bedroomsNumber
 *  @returns {String}
 */
export const getPropertyDescription = (guestsNumber, bedroomsNumber) =>
  `Guests: ${guestsNumber}${
    bedroomsNumber ? ` | Bedrooms: ${bedroomsNumber}` : ''
  }`;
