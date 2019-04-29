import isValidHTML from 'is-html';

import { getDescriptionWithExtraDescription } from './getDescriptionWithExtraDescription';
import { getDescriptionWithHTMLExtraDescription } from './getDescriptionWithHTMLExtraDescription';
import { getHTMLDescriptionWithExtraDescription } from './getHTMLDescriptionWithExtraDescription';
import { getHTMLDescriptionWithHTMLExtraDescription } from './getHTMLDescriptionWithHTMLExtraDescription';

/**
 * @param  {string} descriptionText
 * @param  {string} extraDescriptionText
 * @param  {string} extraDescriptionButtonText
 * @return {Object}
 */
export const getDescriptions = (
  descriptionText,
  extraDescriptionText,
  extraDescriptionButtonText
) => {
  if (isValidHTML(descriptionText) && isValidHTML(extraDescriptionText)) {
    return getHTMLDescriptionWithHTMLExtraDescription(
      descriptionText,
      extraDescriptionText,
      extraDescriptionButtonText
    );
  }

  if (isValidHTML(descriptionText)) {
    return getHTMLDescriptionWithExtraDescription(
      descriptionText,
      extraDescriptionText,
      extraDescriptionButtonText
    );
  }

  if (isValidHTML(extraDescriptionText)) {
    return getDescriptionWithHTMLExtraDescription(
      descriptionText,
      extraDescriptionText,
      extraDescriptionButtonText
    );
  }

  return getDescriptionWithExtraDescription(
    descriptionText,
    extraDescriptionText,
    extraDescriptionButtonText
  );
};
