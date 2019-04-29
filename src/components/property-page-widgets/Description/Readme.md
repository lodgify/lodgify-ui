```jsx
const { descriptionText, homeHighlights, propertyMainCharacteristics } = require('./mock-data/props');

// const homeHighlights = [
//   { iconName: 'credit card', text: 'credit cards' },
//   { iconName: 'no children', text: 'no children allowed' },
// ];

<Description
  descriptionText={descriptionText}
  homeHighlights={homeHighlights}
  propertyMainCharacteristics={propertyMainCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>
```

### Content

#### Extra description text

```jsx
const {
  descriptionText,
  extraDescriptionText,
  homeHighlights,
  propertyMainCharacteristics,
} = require('./mock-data/props');

<Description
  descriptionText={descriptionText}
  extraDescriptionText={extraDescriptionText}
  homeHighlights={homeHighlights}
  propertyMainCharacteristics={propertyMainCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>
```

#### Strings

```jsx
const {
  descriptionText,
  extraDescriptionText,
  homeHighlights,
  propertyMainCharacteristics,
} = require('./mock-data/props');

<Description
  descriptionText={descriptionText}
  extraDescriptionButtonText="See more words"
  extraDescriptionText={extraDescriptionText}
  homeHighlights={homeHighlights}
  homeHighlightsHeadingText="Highlights"
  propertyMainCharacteristics={propertyMainCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>
```
