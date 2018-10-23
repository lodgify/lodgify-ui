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
  locationSummary,
} = require('./mock-data/props');

<Location
  headingText="Where to find us"
  isShowingExactLocation
  latitude={41.387863}
  locationSummary={locationSummary}
  longitude={2.158105}
/>
```

### Variations

### With only location description

```jsx
const {
  locationDescription,
  locationSummary,
} = require('./mock-data/props');

<Location
  isShowingExactLocation
  latitude={41.387863}
  locationDescription={locationDescription}
  locationSummary={locationSummary}
  longitude={2.158105}
/>
```

### With only transport options

```jsx
const {
  locationSummary,
  transportOptions
} = require('./mock-data/props');

<Location
  isShowingExactLocation
  latitude={41.387863}
  locationSummary={locationSummary}
  longitude={2.158105}
  transportOptions={transportOptions}
/>
```
