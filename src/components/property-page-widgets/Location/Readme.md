```jsx
const {
  locationDescription,
  locationSummary,
  transportOptions
} = require('./mock-data/props');

<Location
  isShowingExactLocation
  latitude={41.387863}
  locationDescription={locationDescription}
  locationSummary={locationSummary}
  longitude={2.158105}
  transportOptions={transportOptions}
/>
```

### Content

#### Strings

```jsx
const {
  locationDescription,
  locationSummary,
  transportOptions
} = require('./mock-data/props');

<Location
  isShowingExactLocation
  latitude={41.387863}
  locationDescription={locationDescription}
  locationHeadingText="heading text"
  locationSummary={locationSummary}
  longitude={2.158105}
  transportOptions={transportOptions}
/>
```
