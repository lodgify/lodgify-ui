```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');
const {
  guestsOptions,
  propertyOptions,
  roomOptions,
} = require('./mock-data/options');

<Grid>
  <GridColumn width={8}>
    <Contact
      captchaInputImage={mockCaptcha}
      guestsOptions={guestsOptions}
      propertyOptions={propertyOptions}
      roomOptions={roomOptions}
    />
  </GridColumn>
</Grid>
```
