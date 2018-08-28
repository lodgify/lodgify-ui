```jsx
<OwnerLogin />
```

### Content

#### Strings

```jsx
<OwnerLogin
  emailInputLabel="Email Address"
  forgotPasswordEmailInputLabel="Enter email to reset"
  forgotPasswordHeadingText="Forgot the password"
  forgotPasswordModalTriggerText="Click to reset password"
  forgotPasswordSubmitButtonText="Reset Password"
  headingText="Log in to the site"
  passwordInputLabel="Your Password"
  submitButtonText="Log in to website"
/>
```

### Usage

#### Validation

```jsx
const forgotPasswordValidation = {
  email: { isRequired: true },
};
const validation = {
  email: { isRequired: true },
  password: { isRequired: true },
};

<OwnerLogin
  forgotPasswordValidation={forgotPasswordValidation}
  validation={validation}
/>
```
