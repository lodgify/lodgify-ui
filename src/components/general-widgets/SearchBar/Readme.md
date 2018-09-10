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

#### Fixed
```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  //isFixed // Please uncomment "isFixed" to see exmaple
  isShowingLocationDropdown={false}
  guestsOptions={guestsOptions}
  searchButton={<Button isRounded isCompact>Availability</Button>}
  summaryElement={
    <div>Property information</div>
  }
/> 
```

#### Fixed with mobile
```jsx
const { guestsOptions, locationOptions } = require('./mock-data/options');

<SearchBar
  //isFixed // Please uncomment "isFixed" to see exmaple
  isDisplayedAsModal
  isShowingLocationDropdown={false}
  guestsOptions={guestsOptions}
  modalTrigger={<Button isPositionedRight isRounded isCompact>Availability</Button>}
  mobileSummaryElement={
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
