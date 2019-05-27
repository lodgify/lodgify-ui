```jsx
const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
/>
```

### Variations

#### Custom Search Button

```jsx
const { Button } = require('../../elements/Button');
const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
  searchButton={<Button>Custom!</Button>}
/>
```

#### With Property Summary
```jsx
const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
  isShowingSummary
/>
```

#### Without Location Dropdown
```jsx

<SearchBar />

```

#### Dropdown open above
```jsx
const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
  willDropdownsOpenAbove={true}
/>
```

#### Fixed
```jsx

// Please set this to true to see the example
const displayAsFixed = false;

<SearchBar
  isFixed={displayAsFixed}
  searchButton={<Button isRounded isCompact>Availability</Button>}
  summaryElement={
    <div>Property information</div>
  }
/>
```

#### With summary element in modal and search bar fixed
```jsx

// Please set this to true to see the example
const displayAsFixed = false;

<SearchBar
  isFixed={displayAsFixed}
  isDisplayedAsModal
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
const { locationOptions } = require('./mock-data/options');

<SearchBar
  locationOptions={locationOptions}
  isDisplayedAsModal
/>
```
