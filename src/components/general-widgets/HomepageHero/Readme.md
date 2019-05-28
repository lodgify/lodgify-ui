```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems, locationOptions } = require('./mock-data/mock-data');

<HomepageHero
  activeNavigationItem={1}
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  headingText="Super Interesting Heading"
  searchBarLocationOptions={locationOptions}
/>
```

### Variations

#### Custom search button

```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems, locationOptions } = require('./mock-data/mock-data');

<HomepageHero
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  searchBarLocationOptions={locationOptions}
  searchBarSearchButton={<Button>Check now!</Button>}
/>
```

#### Custom search bar modal heading

```jsx
// Viewport width needs to be less than 600px to trigger modal

const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<HomepageHero
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  searchBarModalHeadingText="Custom modal heading"
/>
```