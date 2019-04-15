```jsx
const featuredProperties = [
  {
    bedroomsNumber: 3,
    guestsNumber: 3,
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    pricePerPeriod: '$280',
    propertyName: 'The Cat House',
    propertyType: 'Bed and breakfast',
    propertyUrl: '/',
    ratingNumber: 4.8,
  },
  {
    bedroomsNumber: 3,
    guestsNumber: 3,
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    pricePerPeriod: '$280',
    propertyName: 'The Cat House',
    propertyType: 'Bed and breakfast',
    propertyUrl: '/',
    ratingNumber: 4.8,
  },
];

<FeaturedProperties
  featuredProperties={featuredProperties}
  headingText="Featured properties"
/>
```

### States

#### Showing placeholder

```jsx
<FeaturedProperties
  headingText="Featured properties"
  isShowingPlaceholder
/>
```