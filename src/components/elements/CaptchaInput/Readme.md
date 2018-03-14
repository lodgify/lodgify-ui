```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');

<Form>
  <CaptchaInput image={mockCaptcha} />
</Form>
```

### States

#### Error

```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');

<Form>
  <CaptchaInput error image={mockCaptcha} />
  <Divider />
  <Divider />
  <CaptchaInput error="Something's not right" image={mockCaptcha} />
</Form>
```

#### Valid

```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');

<Form>
  <CaptchaInput isValid image={mockCaptcha} />
</Form>
```

### Variations

#### Labeled

```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');

<Form>
  <CaptchaInput label="Security code" image={mockCaptcha} />
</Form>
```
