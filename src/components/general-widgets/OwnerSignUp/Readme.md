```jsx
import { OwnerSignUp } from '@lodgify/ui';

<OwnerSignUp />
```

### Content

#### Strings

```jsx
import { OwnerSignUp } from '@lodgify/ui';

<OwnerSignUp
  emailInputLabel="Enter email"
  firstNameInputLabel="Your first name"
  headingText="Sign up today!"
  isPrivacyConsentRequired
  lastNameInputLabel="Your last name"
  submitButtonText="Submit here"
  privacyConsentLabelLinkText="sign here"
  privacyConsentLabelLinkUrl="erl"
  privacyConsentLabelText="please"
  isBotProtected
  botProtectionMessage="The form is protected from hackers"
/>
```

### Usage

#### Validation

```jsx
import { OwnerSignUp } from '@lodgify/ui';


const validation = {
  email: { isRequired: true },
  firstName: { isRequired: true },
  lastName: { isRequired: true },
  privacyConsent: { isRequired: true },
};

<OwnerSignUp validation={validation} isPrivacyConsentRequired />
```

### States

#### Success

```jsx
import { OwnerSignUp } from '@lodgify/ui';

<OwnerSignUp
  successMessage="An email has been sent to your account to complete the signup process"
/>
```

#### Error

```jsx
import { OwnerSignUp } from '@lodgify/ui';

<OwnerSignUp
  errorMessage="Request Failed. Please try again."
/>
```
