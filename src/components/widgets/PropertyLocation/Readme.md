```jsx
const {
  locationDescription,
  locationSummary,
  transportOptions
} = require('./mock-data/props');

<Grid>
  <GridRow>
    <PropertyLocation
      locationDescription={locationDescription}
      locationSummary={locationSummary}
      transportOptions={transportOptions}
      isShowingExactLocation
      latitude={41.387863}
      longitude={2.158105}
    />
  </GridRow>
</Grid>
```
