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

### Variations

#### Show active navigation item
```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<Hero     
  activeNavigationItemIndex={0}
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
  heading="Super Interesting Heading"
/>
```

### Content

#### Children
```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<Hero     
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
>
  <FlexContainer
    alignItems="center"
    justifyContent="center"
  >
    <Heading size="huge">The Cat House</Heading>
  </FlexContainer>
</Hero>
```

#### Search bar

```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<Hero     
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ href: '/book', text: 'Book now'}}
  headerSearchBarGuestsOptions={[{ text: '1', value: '1' }]}
  headerSearchBarLocationOptions={[{ text: 'New York', value: '2' }]}
  headerSearchBarModalHeadingText="Custom heading"
  headerSearchBarSearchButton={<Button>Check now!</Button>}
/>
```