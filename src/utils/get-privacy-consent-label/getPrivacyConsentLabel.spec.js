import { mount } from 'enzyme';

import { getPrivacyConsentLabel } from './getPrivacyConsentLabel';

const getPrivacyConsentLabelMarkup = props =>
  mount(getPrivacyConsentLabel(...props));

const labelText = 'labelText';
const labelLinkUrl = 'labelLinkUrl';
const labelLinkText = 'labelLinkText';

describe('getPrivacyConsentLabel', () => {
  it('should return the right structure', () => {
    const actual = getPrivacyConsentLabelMarkup([labelText]);

    expect(actual).toMatchSnapshot();
  });

  describe('if `privacyConsentLabelLinkUrl` is passed', () => {
    it('should return the right structure', () => {
      const actual = getPrivacyConsentLabelMarkup([labelText, labelLinkUrl]);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if both `privacyConsentLabelLinkUrl` and `privacyConsentLabelLinkText` are passed', () => {
    it('should return the right structure', () => {
      const actual = getPrivacyConsentLabelMarkup([
        labelText,
        labelLinkUrl,
        labelLinkText,
      ]);

      expect(actual).toMatchSnapshot();
    });
  });
});
