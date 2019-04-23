```jsx
<OwnerSignUp />
```

### Content

#### Strings

```jsx
<OwnerSignUp
  emailInputLabel="Enter email"
  firstNameInputLabel="Your first name"
  headingText="Sign up today!"
  lastNameInputLabel="Your last name"
  submitButtonText="Submit here"
/>
```

### Usage

#### Validation

```jsx
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
<OwnerSignUp
  successMessage="An email has been sent to your account to complete the signup process"
/>
```

#### Error

```jsx
<OwnerSignUp
  errorMessage="Request Failed. Please try again."
/>
```
