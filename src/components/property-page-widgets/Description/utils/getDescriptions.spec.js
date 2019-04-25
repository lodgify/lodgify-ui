jest.mock('./getDescriptionWithExtraDescription');
jest.mock('./getDescriptionWithHTMLExtraDescription');
jest.mock('./getHTMLDescriptionWithExtraDescription');
jest.mock('./getHTMLDescriptionWithHTMLExtraDescription');

import { getDescriptions } from './getDescriptions';
import { getDescriptionWithExtraDescription } from './getDescriptionWithExtraDescription';
import { getDescriptionWithHTMLExtraDescription } from './getDescriptionWithHTMLExtraDescription';
import { getHTMLDescriptionWithExtraDescription } from './getHTMLDescriptionWithExtraDescription';
import { getHTMLDescriptionWithHTMLExtraDescription } from './getHTMLDescriptionWithHTMLExtraDescription';

const HTML_DESCRIPTIONS = '🔤';
const DESCRIPTIONS = '🔡';
const DESCRIPTION_HTML_EXTRA_DESCRIPTION = '🔠';
const HTML_DESCRIPTION_EXTRA_DESCRIPTION = '🆒';

getHTMLDescriptionWithHTMLExtraDescription.mockReturnValue(HTML_DESCRIPTIONS);
getDescriptionWithExtraDescription.mockReturnValue(DESCRIPTIONS);
getDescriptionWithHTMLExtraDescription.mockReturnValue(
  DESCRIPTION_HTML_EXTRA_DESCRIPTION
);
getHTMLDescriptionWithExtraDescription.mockReturnValue(
  HTML_DESCRIPTION_EXTRA_DESCRIPTION
);

const buttonText = '🔴';
const description = '➿';
const htmlDescription = '<p>➿</p>';

describe('getDescriptions', () => {
  describe('if `descriptionText` and `extraDescriptionText` are valid html', () => {
    it('should call `getHTMLDescriptionWithHTMLExtraDescription` with the correct arguments', () => {
      getDescriptions(htmlDescription, htmlDescription, buttonText);
      expect(getHTMLDescriptionWithHTMLExtraDescription).toHaveBeenCalledWith(
        htmlDescription,
        htmlDescription,
        buttonText
      );
    });

    it('should return the correct value', () => {
      const actual = getDescriptions(
        htmlDescription,
        htmlDescription,
        buttonText
      );

      expect(actual).toEqual(HTML_DESCRIPTIONS);
    });
  });

  describe('if only `descriptionText` is valid html', () => {
    it('should call `getHTMLDescriptionWithExtraDescription` with the correct arguments', () => {
      getDescriptions(htmlDescription, description, buttonText);
      expect(getHTMLDescriptionWithExtraDescription).toHaveBeenCalledWith(
        htmlDescription,
        description,
        buttonText
      );
    });

    it('it should return the correct value', () => {
      const actual = getDescriptions(htmlDescription, description, buttonText);

      expect(actual).toEqual(HTML_DESCRIPTION_EXTRA_DESCRIPTION);
    });
  });

  describe('if only `extraDescriptionText` is valid html', () => {
    it('should call `getDescriptionWithHTMLExtraDescription` with the correct arguments', () => {
      getDescriptions(description, htmlDescription, buttonText);
      expect(getDescriptionWithHTMLExtraDescription).toHaveBeenCalledWith(
        description,
        htmlDescription,
        buttonText
      );
    });

    it('it should return the correct value', () => {
      const actual = getDescriptions(description, htmlDescription, buttonText);

      expect(actual).toEqual(DESCRIPTION_HTML_EXTRA_DESCRIPTION);
    });
  });
  describe('if neither `descriptionText` and `extraDescriptionText` are valid html', () => {
    it('should call `getDescriptionWithExtraDescription` with the correct arguments', () => {
      getDescriptions(description, description, buttonText);
      expect(getDescriptionWithExtraDescription).toHaveBeenCalledWith(
        description,
        description,
        buttonText
      );
    });

    it('it should return the correct value', () => {
      const actual = getDescriptions(description, description, buttonText);

      expect(actual).toEqual(DESCRIPTIONS);
    });
  });
});
