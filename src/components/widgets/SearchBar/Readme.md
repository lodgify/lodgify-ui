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
  isShowingPropertySummary
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
Renders with `is-sticky` classname
```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  isSticky
/>
```
