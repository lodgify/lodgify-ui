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
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  images={images}
  propertyName="Livingstone Cottage"
  ratingNumber={4.2}
  searchBarGuestsOptions={guestsOptions}
  searchBarLocationOptions={locationOptions}
/>
```

### Variations

#### Custom search button

```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { images, navigationItems, guestsOptions, locationOptions } = require('./mock-data/mock-data');

<PropertyPageHero
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  images={images}
  searchBarGuestsOptions={guestsOptions}
  searchBarLocationOptions={locationOptions}
  searchBarSearchButton={<Button>Check now!</Button>}
/>
```

#### Custom search bar modal heading

```jsx
// Viewport width needs to be less than 600px to trigger modal

const logoSrc = require('./mock-data/livingstoneLogo.png');
const { images, navigationItems, guestsOptions, locationOptions } = require('./mock-data/mock-data');

<PropertyPageHero
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  images={images}
  searchBarGuestsOptions={guestsOptions}
  searchBarLocationOptions={locationOptions}
  searchBarModalHeadingText="Custom modal heading"
/>
```

#### With fewer than two images

```jsx
// If there are fewer than two images, the gallery won't be displayed

const logoSrc = require('./mock-data/livingstoneLogo.png');
const { image, navigationItems, guestsOptions, locationOptions } = require('./mock-data/mock-data');


<PropertyPageHero
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  images={image}
  searchBarGuestsOptions={guestsOptions}
  searchBarLocationOptions={locationOptions}
  searchBarModalHeadingText="Custom modal heading"
/>
```