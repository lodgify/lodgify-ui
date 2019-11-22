```jsx
const { images, thumbnailImages } = require("./mock-data/images");

<Pictures galleryImages={images} thumbnailImages={thumbnailImages} />;
```

### Content

#### Number of thumbnails

```jsx
const { images, thumbnailImages } = require("./mock-data/images");

<Pictures
  galleryImages={images}
  numberOfThumbnails={3}
  thumbnailImages={thumbnailImages}
/>;
```

#### Heading in gallery modal

```jsx
const { images, thumbnailImages } = require("./mock-data/images");

<Pictures
  galleryImages={images}
  propertyName="The Cat House"
  ratingNumber={4.3}
  thumbnailImages={thumbnailImages}
/>;
```

#### Strings

```jsx
const { images, thumbnailImages } = require("./mock-data/images");

<Pictures
  galleryImages={images}
  headingText="Photos of the property"
  linkText="Click here for more"
  thumbnailImages={thumbnailImages}
/>;
```
