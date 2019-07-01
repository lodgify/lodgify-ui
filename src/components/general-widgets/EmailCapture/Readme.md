```jsx
<EmailCapture />
```
### Variations

#### Privacy consent

```jsx
<EmailCapture isPrivacyConsentRequired />
```

### States

#### Error

```jsx
<EmailCapture errorMessage="Something went wrong" />
```

#### Success

```jsx
<EmailCapture successMessage="Thanks :)" />
```

### Content

#### Strings

```jsx
<EmailCapture
  isPrivacyConsentRequired
  privacyConsentLabelLinkText="thing"
  privacyConsentLabelLinkUrl="/"
  privacyConsentInputError="You forgot this"
  privacyConsentLabelText="You've just gotta click this"
  buttonText="Send"
  headingText="Go on, give us your email..."
  emailInputLabel="Type it here"
  isBotProtected
  botProtectionMessage="The form is protected from hackers"
/>
```
