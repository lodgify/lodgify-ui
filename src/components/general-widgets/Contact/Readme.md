```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');
const {
  propertyOptions,
  roomOptions,
} = require('./mock-data/options');

<Contact
  captchaInputImage={mockCaptcha}
  propertyOptions={propertyOptions}
  roomOptions={roomOptions}
/>
```

### Content


#### Dropdowns

No dropdown will be rendered if there is no options prop.

```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');
const {
  roomOptions,
} = require('./mock-data/options');

<Contact
  captchaInputImage={mockCaptcha}
  roomOptions={roomOptions}
/>
```

A disabled dropdown will be rendered if the options array is empty.

```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');
const {
  roomOptions,
} = require('./mock-data/options');

<Contact
  captchaInputImage={mockCaptcha}
  propertyOptions={[]}
  roomOptions={roomOptions}
/>
```

A dropdown will be rendered if the options array is populated.

```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');
const {
  propertyOptions,
  roomOptions,
} = require('./mock-data/options');

<Contact
  captchaInputImage={mockCaptcha}
  propertyOptions={propertyOptions}
  roomOptions={roomOptions}
/>
```