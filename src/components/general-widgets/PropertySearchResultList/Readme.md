```jsx
const { propertySearchResults } = require('./mock-data/mock-data');

  // {
  //   bathsNumber: 2,
  //   bathsText: 'baths',
  //   bedroomsNumber: 2,
  //   bedroomsText: 'bedrooms',
  //   bedsNumber: 2,
  //   bedsText: 'beds',
  //   guestsNumber: 2,
  //   guestsText: 'guests',
  //   imageUrl:
  //     'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
  //   pricePerPeriod: '$280',
  //   periodText: 'per month',
  //   propertyAmenities: ['Pool', 'Wifi', 'Washer', 'Kitchen'],
  //   propertyName: 'The Cat House',
  //   propertyType: 'Bed and breakfast',
  //   propertyUrl: '/',
  //   ratingNumber: 4.7,
  // },

<PropertySearchResultList
  propertySearchResults={propertySearchResults}
/>
```
### Content

#### Results count text

```jsx
const { propertySearchResults } = require('./mock-data/mock-data');

<PropertySearchResultList
  propertySearchResults={propertySearchResults}
  resultsCountText="properties found"
/>
```

#### Dropdown input

```jsx
const { propertySearchResults } = require('./mock-data/mock-data');

<PropertySearchResultList
  dropdownLabel="Sort"
  dropdownOnChange={console.log}
  dropdownOptions={[
    {
      content: 'Price (lowest to highest)',  
      text: 'Sort by price (lowest first)',
      value: 'price'
    }
  ]}
  propertySearchResults={propertySearchResults}
  resultsCountText="properties found"
/>
```

#### Message

```jsx
const { propertySearchResults } = require('./mock-data/mock-data');

<PropertySearchResultList
  messageButtonOnClick={console.log}
  messageButtonText="You can click me"
  messageText="Found you a whole bunch of properties"
  propertySearchResults={propertySearchResults}
/>
```

### States

#### Showing placeholder

```jsx
<PropertySearchResultList
  isShowingPlaceholder
/>
```
