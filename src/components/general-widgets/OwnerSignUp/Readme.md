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
};

<OwnerSignUp validation={validation} />
```
