```jsx
const {
  dateOptions,
  propertyOptions,
  timeOptions,
  timeZoneOptions,
} = require('./mock-data/options');

<Grid>
  <GridColumn width={8}>
    <CallMeBack
      dateOptions={dateOptions}
      propertyOptions={propertyOptions}
      timeOptions={timeOptions}
      timeZoneOptions={timeZoneOptions}
    />
  </GridColumn>
</Grid>
```
