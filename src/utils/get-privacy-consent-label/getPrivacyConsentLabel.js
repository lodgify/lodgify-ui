import React from 'react';

import { Link } from 'elements/Link';
import { PRIVACY_POLICY } from 'utils/default-strings/constants';

/**
 * @param  {string} privacyConsentLabelText
 * @param  {string} privacyConsentLabelLinkUrl
 * @param  {string} [privacyConsentLabelLinkText=PRIVACY_POLICY]
 * @return {Object}
 */
export const getPrivacyConsentLabel = (
  privacyConsentLabelText,
  privacyConsentLabelLinkUrl,
  privacyConsentLabelLinkText = PRIVACY_POLICY
) => (
  <div className="privacy-consent-label">
    {privacyConsentLabelText}
    {privacyConsentLabelLinkUrl && (
      <Link href={privacyConsentLabelLinkUrl} willOpenInNewTab>
        {privacyConsentLabelLinkText}
      </Link>
    )}
  </div>
);
