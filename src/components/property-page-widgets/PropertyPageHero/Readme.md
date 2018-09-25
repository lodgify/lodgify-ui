```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<PropertyPageHero
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
/>
```
