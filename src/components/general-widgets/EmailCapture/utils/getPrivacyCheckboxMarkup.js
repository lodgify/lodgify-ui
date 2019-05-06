import React from 'react';

import { Checkbox } from 'inputs/Checkbox';
import { getPrivacyConsentLabel } from 'utils/get-privacy-consent-label';

/**
 * @param  {string}   privacyConsentInputError
 * @param  {boolean}  isPrivacyConsentInputChecked
 * @param  {string}   privacyConsentLabelText
 * @param  {string}   privacyConsentLabelLinkUrl
 * @param  {string}   privacyConsentLabelLinkText
 * @param  {Function} onClickPrivacyConsentInput
 * @return {Object}
 */
export const getPrivacyCheckboxMarkup = (
  privacyConsentInputError,
  isPrivacyConsentInputChecked,
  privacyConsentLabelText,
  privacyConsentLabelLinkUrl,
  privacyConsentLabelLinkText,
  onClickPrivacyConsentInput
) => (
  <Checkbox
    error={privacyConsentInputError}
    isChecked={isPrivacyConsentInputChecked}
    label={getPrivacyConsentLabel(
      privacyConsentLabelText,
      privacyConsentLabelLinkUrl,
      privacyConsentLabelLinkText
    )}
    onClick={onClickPrivacyConsentInput}
  />
);
