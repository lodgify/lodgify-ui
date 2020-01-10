```jsx
import { EmailCapture } from '@lodgify/ui';

<EmailCapture />
```
### Variations

#### Privacy consent

```jsx
import { EmailCapture } from '@lodgify/ui';

<EmailCapture isPrivacyConsentRequired />
```

### States

#### Error

```jsx
import { EmailCapture } from '@lodgify/ui';

<EmailCapture errorMessage="Something went wrong" />
```

#### Success

```jsx
import { EmailCapture } from '@lodgify/ui';

<EmailCapture successMessage="Thanks :)" />
```

### Content

#### Strings

```jsx
import { EmailCapture } from '@lodgify/ui';

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
