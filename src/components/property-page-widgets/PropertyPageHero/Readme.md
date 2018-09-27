```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { navigationItems, guestsOptions, locationOptions } = require('./mock-data/mock-data');
const images = [
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'Two Cats',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Roof',
  },
  {
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg?w=1024&mode=max',
    label: 'The Church',
  },
];

<PropertyPageHero
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
  images={images}
  propertyName="Livingstone Cottage"
  ratingNumber={4.2}
  searchBarGuestsOptions={guestsOptions}
  searchBarLocationOptions={locationOptions}
/>
```
