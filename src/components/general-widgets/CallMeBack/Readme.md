```jsx
const {
  dateOptions,
  propertyOptions,
  timeOptions,
  timeZoneOptions,
} = require('./mock-data/options');

<Grid>
  <GridColumn computer={8} tablet={11} mobile={12}>
    <CallMeBack
      dateOptions={dateOptions}
      propertyOptions={propertyOptions}
      timeOptions={timeOptions}
      timeZoneOptions={timeZoneOptions}
    />
  </GridColumn>
</Grid>
```
