```jsx
const { guestsOptions } = require('./mock-data/options');

// Please set this to true to see the example
const displayAsFixed = false;

<PropertyPageSearchBar
  isFixed={displayAsFixed}
  guestsOptions={guestsOptions}
  searchButton={<Button isCompact isRounded>Check Availability</Button>}
  summaryElement={<div>Property Information</div>}
  modalTrigger={<Button isPositionedRight isRounded isCompact>Check Availability</Button>}
  modalSummaryElement={<div>Property information for mobile modal</div>}
  summaryLocationName="Barcelona"
  summaryNightPrice="$200"
  summaryPropertyName="Property"
  summaryRatingNumber={2.3}
/> 
```

### States

#### Showing placeholders

```jsx
const { guestsOptions } = require('./mock-data/options');

// Please set this to true to see the example
const displayAsFixed = true;

<PropertyPageSearchBar
  isFixed={displayAsFixed}
  guestsOptions={guestsOptions}
  searchButton={<Button isCompact isRounded>Check Availability</Button>}
  summaryElement={<div>Property Information</div>}
  modalTrigger={<Button isPositionedRight isRounded isCompact>Check Availability</Button>}
  modalSummaryElement={<div>Property information for mobile modal</div>}
  summaryLocationName="Barcelona"
  summaryPropertyName="Property"
  isShowingPlaceholder
/> 
```