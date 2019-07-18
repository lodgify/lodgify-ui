```jsx
const {
  propertyOptions,
} = require('./mock-data/options');

<Contact
  propertyOptions={propertyOptions}
/>
```

### Content


#### Dropdowns

No dropdown will be rendered if there is no options prop.

```jsx
<Contact />
```

A disabled dropdown will be rendered if the options array is empty.

```jsx
<Contact
  propertyOptions={[]}
/>
```

A dropdown will be rendered if the options array is populated.

```jsx
const {
  propertyOptions,
} = require('./mock-data/options');

<Contact
  propertyOptions={propertyOptions}
/>
```

#### Strings

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
  botProtectionMessage="The form is protected from hackers"
/>
```

### Usage

#### Validation

```jsx
const {
  propertyOptions,
} = require('./mock-data/options');

const validation = {
  comments: { isRequired: true },
  dates: {
    getIsEmpty: value => !value || [value.startDate, value.endDate].includes(null),
    isRequired: true,
  },
  email: { isRequired: true },
  guests: { isRequired: true },
  name: { isRequired: true },
  phone: { isRequired: true },
  privacyConsent: { isRequired: true },
  property: { isRequired: true },
};

<Contact
  isPrivacyConsentRequired
  propertyOptions={propertyOptions}
  validation={validation}
/>
```

### States

#### Success

```jsx
<Contact
  successMessage="The contact form has been submitted."
/>
```

#### Error

```jsx
<Contact
  errorMessage="Request Failed. Please try again."
/>
```
