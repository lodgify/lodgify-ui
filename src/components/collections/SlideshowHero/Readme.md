```jsx
const logoSrc = require('./mock-data/livingstoneLogo.png');
const { backgroundImageUrl, navigationItems } = require('./mock-data/mock-data');

<SlideshowHero
  headerProps={{
    navigationItems: navigationItems,
    primaryCTA: { onClick: console.log, text: 'Book now'},
    logoText:  "Livingstone Cottage",
  }}
  slideshowProps={{ 
    images: [
      { url: backgroundImageUrl },
      { url: backgroundImageUrl }
    ]
  }}
  headingText="Super Interesting Heading"
>
  <SearchBar />
</SlideshowHero>
```