```jsx 
const {
  propertyOptions,
} = require('./mock-data/options');

<Contact
  arrivalDateInputLabel="Check-in"
  commentsInputLabel="Other notes"
  departureDateInputLabel="Check-out"
  emailInputLabel="Your email"
  guestsInputLabel="Visitors"
  headingText="Get in touch"
  isPrivacyConsentRequired
  nameInputLabel="Your name"
  phoneInputLabel="Your phone"
  privacyConsentLabelLinkText="call me back"
  privacyConsentLabelLinkUrl="erl"
  privacyConsentLabelText="I give my consent if you "
  propertyInputLabel="Chalet"
  propertyOptions={propertyOptions}
  submitButtonText="Submit"
  isBotProtected
  botProtectionMessage={<Paragraph weight="light" size="tiny">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">privacy policy</a> and <a href="https://policies.google.com/terms" target="_blank">terms of service</a> apply.</Paragraph>}
/>
```