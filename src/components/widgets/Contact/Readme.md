```jsx
const mockCaptcha = require('./mock-data/signupcode.jpeg');
const {
  guestsOptions,
  propertyOptions,
  roomOptions,
} = require('./mock-data/options');

<Grid>
  <GridColumn computer={8} tablet={11} mobile={12}>
    <Contact
      captchaInputImage={mockCaptcha}
      guestsOptions={guestsOptions}
      propertyOptions={propertyOptions}
      roomOptions={roomOptions}
    />
  </GridColumn>
</Grid>
```
