```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<Hero     
  backgroundImageUrl={backgroundImageUrl} 
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
  heading="Super Interesting Heading"
/>
```

### Content

#### Extra content
```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<Hero     
  backgroundImageUrl={backgroundImageUrl} 
  extraContent={<Heading size="small">Some supporting text for the super interesting heading</Heading>}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
  heading="Super Interesting Heading"
/>
```
