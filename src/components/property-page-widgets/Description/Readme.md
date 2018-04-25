```jsx
const { descriptionText, icons } = require('./mock-data/props');

<PropertyDescription
  descriptionText={descriptionText}
  icons={icons}
  propertyType="Bed & Breakfast"
/>
```

### Content

#### Extra description text

```jsx
const {
  descriptionText,
  extraDescriptionText,
  icons
} = require('./mock-data/props');

<PropertyDescription
  descriptionText={descriptionText}
  extraDescriptionText={extraDescriptionText}
  icons={icons}
  propertyType="Bed & Breakfast"
/>
```
