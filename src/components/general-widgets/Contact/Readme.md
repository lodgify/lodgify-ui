```jsx
const {
  propertyOptions,
  roomOptions,
} = require('./mock-data/options');

<Contact
  propertyOptions={propertyOptions}
  roomOptions={roomOptions}
/>
```

### Content


#### Dropdowns

No dropdown will be rendered if there is no options prop.

```jsx
const {
  roomOptions,
} = require('./mock-data/options');

<Contact
  roomOptions={roomOptions}
/>
```

A disabled dropdown will be rendered if the options array is empty.

```jsx
const {
  roomOptions,
} = require('./mock-data/options');

<Contact
  propertyOptions={[]}
  roomOptions={roomOptions}
/>
```

A dropdown will be rendered if the options array is populated.

```jsx
const {
  propertyOptions,
  roomOptions,
} = require('./mock-data/options');

<Contact
  propertyOptions={propertyOptions}
  roomOptions={roomOptions}
/>
```

#### Strings

```jsx
const {
  propertyOptions,
  roomOptions,
} = require('./mock-data/options');

<Contact
  arrivalDateInputLabel="Check-in"
  commentsInputLabel="Other notes"
  departureDateInputLabel="Check-out"
  emailInputLabel="Your email"
  guestsInputLabel="Visitors"
  headingText="Get in touch"
  nameInputLabel="Your name"
  phoneInputLabel="Your phone"
  propertyInputLabel="Chalet"
  propertyOptions={propertyOptions}
  roomInputLabel="Salon"
  roomOptions={roomOptions}
  submitButtonText="Submit"
/>
```

### Usage

#### Validation

```jsx
const {
  propertyOptions,
  roomOptions,
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
  room: {
    isRequired: true,
    invalidMessage: 'Garden is invalid',
    getIsValid: value => value !== 'garden'
  },
  privacyConsent: { isRequired: true },
  property: { isRequired: true },
};

<Contact
  isPrivacyConsentRequired
  propertyOptions={propertyOptions}
  roomOptions={roomOptions}
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
