```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
/>
```

### Variations

#### Custom Search Button

```jsx
const { Button } = require('../../elements/Button');
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  searchButton={<Button>Custom!</Button>}
/>
```

#### With Property Summary
```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  isShowingSummary
/>
```

#### Without Location Dropdown
```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  isShowingLocationDropdown={false}
/>
```

#### Sticky
```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  isSticky
/>
```
