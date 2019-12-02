```jsx
const { images } = require("./mock-data/images");

<Pictures galleryImages={images} />;
```

### Content

#### Number of thumbnails

```jsx
const { images } = require("./mock-data/images");

<Pictures galleryImages={images} numberOfThumbnails={3} />;
```

#### Heading in gallery modal

```jsx
const { images } = require("./mock-data/images");

<Pictures
  galleryImages={images}
  propertyName="The Cat House"
  ratingNumber={4.3}
/>;
```

#### Strings

```jsx
const { images } = require("./mock-data/images");

<Pictures
  galleryImages={images}
  headingText="Photos of the property"
  linkText="Click here for more"
/>;
```
