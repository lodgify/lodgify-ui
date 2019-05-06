import { getPrivacyCheckboxMarkup } from './getPrivacyCheckboxMarkup';

const privacyConsentInputError = 'privacyConsentInputError';
const isPrivacyConsentInputChecked = true;
const privacyConsentLabelText = 'privacyConsentLabelText';
const privacyConsentLabelLinkUrl = 'privacyConsentLabelLinkUrl';
const privacyConsentLabelLinkText = 'privacyConsentLabelLinkText';
const onClickPrivacyConsentInput = Function.prototype;

describe('getPrivacyCheckboxMarkup', () => {
  it('should return the correct structure', () => {
    const actual = getPrivacyCheckboxMarkup(
      privacyConsentInputError,
      isPrivacyConsentInputChecked,
      privacyConsentLabelText,
      privacyConsentLabelLinkUrl,
      privacyConsentLabelLinkText,
      onClickPrivacyConsentInput
    );

    expect(actual).toMatchSnapshot();
  });
});
