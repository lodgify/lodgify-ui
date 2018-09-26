```jsx
const { pictures } = require('./mock-data/pictures');

<Pictures pictures={pictures} />
```

### Content

#### Heading in gallery modal

```jsx
const { pictures } = require('./mock-data/pictures');

<Pictures
  pictures={pictures}
  propertyName="The Cat House"
  ratingNumber={4.3}
/>
```


#### Strings

```jsx
const { pictures } = require('./mock-data/pictures');

<Pictures
  pictures={pictures}
  headingText="Photos of the property"
  linkText="Click here for more"
/>
```
