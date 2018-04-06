```jsx
const { descriptionText, icons } = require('./mock-data/props');

<Grid>
  <GridRow>
    <PropertyDescription
      descriptionText={descriptionText}
      icons={icons}
      propertyType="Bed & Breakfast"
    />
  </GridRow>
</Grid>
```

### Content

#### Extra description text

```jsx
const {
  descriptionText,
  extraDescriptionText,
  icons
} = require('./mock-data/props');

<Grid>
  <GridRow>
    <PropertyDescription
      descriptionText={descriptionText}
      extraDescriptionText={extraDescriptionText}
      icons={icons}
      propertyType="Bed & Breakfast"
    />
  </GridRow>
</Grid>
```
