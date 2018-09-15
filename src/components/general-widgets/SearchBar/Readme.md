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

#### Fixed
```jsx
const { guestsOptions } = require('./mock-data/options');

// Please set this to true to see the example
const displayAsFixed = false;

<SearchBar
  isFixed={displayAsFixed}
  isShowingLocationDropdown={false}
  guestsOptions={guestsOptions}
  searchButton={<Button isRounded isCompact>Availability</Button>}
  summaryElement={
    <div>Property information</div>
  }
/> 
```

#### With summary element in modal and search bar fixed
```jsx
const { guestsOptions } = require('./mock-data/options');

// Please set this to true to see the example
const displayAsFixed = false;

<SearchBar
  isFixed={displayAsFixed}
  isDisplayedAsModal
  isShowingLocationDropdown={false}
  guestsOptions={guestsOptions}
  modalTrigger={<Button isPositionedRight isRounded isCompact>Availability</Button>}
  modalSummaryElement={
    <div>Property information for mobile modal</div>
  }
  summaryElement={
    <div>Property information</div>
  }
/>
```

#### Display search bar in a modal

```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  isDisplayedAsModal
/>
```

#### Custom modal trigger

```jsx
const { Button } = require('../../elements/Button');
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  guestsOptions={guestsOptions}
  locationOptions={locationOptions}
  modalTrigger={<Button>Show Search bar</Button>}
  isDisplayedAsModal
/>
```
