```jsx
const amenities = ['Pool', 'Wifi', 'Washer', 'Kitchen']; 

<PropertySearchResult
  bathsNumber={2}
  bathsText="baths"
  bedroomsNumber={2}
  bedroomsText="bedrooms"
  bedsNumber={2}
  bedsText="beds"
  guestsNumber={2}
  guestsText="guests"
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
  periodText="per month"
  pricePerPeriod="$280"
  propertyAmenities={amenities}
  propertyName="The Cat House"
  propertyType="Bed and breakfast"
  propertyUrl="/"
  ratingNumber={4.8}
/>
```

### Variations

#### Price without period text
```jsx
const amenities = ['Pool', 'Wifi', 'Washer', 'Kitchen']; 

<PropertySearchResult
  bathsNumber={2}
  bathsText="baths"
  bedroomsNumber={2}
  bedroomsText="bedrooms"
  bedsNumber={2}
  bedsText="beds"
  guestsNumber={2}
  guestsText="guests"
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
  pricePerPeriod="$280"
  propertyAmenities={amenities}
  propertyName="The Cat House"
  propertyType="Bed and breakfast"
  propertyUrl="/"
  ratingNumber={4.8}
/>
```

### States

#### Showing placeholder

```jsx
<PropertySearchResult
  bedroomsNumber={0}
  guestsNumber={0}
  imageUrl=""
  isShowingPlaceholder
  pricePerPeriod=""
  propertyName=""
  propertyType=""
  propertyUrl=""
  ratingNumber={0}
/>
```