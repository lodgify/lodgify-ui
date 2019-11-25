```jsx
const logoSrc = require("./mock-data/livingstoneLogo.png");
const {
  backgroundImageUrl,
  navigationItems
} = require("./mock-data/mock-data");
const galleryImages = [
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Two cats"
  },
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Two more cats"
  },
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Much cats"
  }
];

<PropertyPageHero
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: "Book now" }}
  galleryImages={galleryImages}
  propertyName="Livingstone Cottage"
  ratingNumber={4.2}
/>;
```

### Variations

#### With fewer than two gallery images

If there are fewer than two gallery images, the gallery won't be displayed.

```jsx
const logoSrc = require("./mock-data/livingstoneLogo.png");
const {
  backgroundImageUrl,
  image,
  navigationItems
} = require("./mock-data/mock-data");

<PropertyPageHero
  backgroundImageUrl={backgroundImageUrl}
  headerLogoSrc={logoSrc}
  headerLogoText="Livingstone Cottage"
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: "Book now" }}
  galleryImages={image}
/>;
```
