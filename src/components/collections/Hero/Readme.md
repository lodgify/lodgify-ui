```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<Hero
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
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
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
  heading="Super Interesting Heading"
/>
```

#### With bottom offset

```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<Hero
  backgroundImageUrl={backgroundImageUrl}
  bottomOffset="150px"
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
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
  headerPrimaryCTA={{ onClick: console.log, text: 'Book now'}}
>
  <FlexContainer
    alignItems="center"
    justifyContent="center"
  >
    <Heading size="huge">The Cat House</Heading>
  </FlexContainer>
</Hero>
```
