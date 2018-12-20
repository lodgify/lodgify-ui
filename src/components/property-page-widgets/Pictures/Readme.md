```jsx
const { images } = require('./mock-data/images');

<Pictures
  galleryImages={images}
  thumbnailImages={images}
/>
```

### Content

#### Heading in gallery modal

```jsx
const { images } = require('./mock-data/images');

<Pictures
  galleryImages={images}
  propertyName="The Cat House"
  ratingNumber={4.3}
  thumbnailImages={images}
/>
```


#### Strings

```jsx
const { images } = require('./mock-data/images');

<Pictures
  galleryImages={images}
  headingText="Photos of the property"
  linkText="Click here for more"
  thumbnailImages={images}
/>
```
