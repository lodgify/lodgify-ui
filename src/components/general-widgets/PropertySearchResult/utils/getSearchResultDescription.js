import { getDescriptionItem } from './getDescriptionItem';

/**
 * @param {number} bathsNumber
 * @param {string} bathsText
 * @param {number} bedroomsNumber
 * @param {string} bedroomsText
 * @param {number} bedsNumber
 * @param {string} bedsText
 * @param {number} guestsNumber
 * @param {string} guestsText
 * @return {string}
 */
export const getSearchResultDescription = (
  bathsNumber,
  bathsText,
  bedroomsNumber,
  bedroomsText,
  bedsNumber,
  bedsText,
  guestsNumber,
  guestsText
) =>
  `${guestsNumber} ${guestsText}${getDescriptionItem(
    bedroomsNumber,
    bedroomsText
  )}${getDescriptionItem(bedsNumber, bedsText)}${getDescriptionItem(
    bathsNumber,
    bathsText
  )}`;
