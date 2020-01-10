```jsx
import { Description } from '@lodgify/ui';
const {
  homeHighlights,
  propertyCharacteristics
} = require("./mock-data/props");

// const homeHighlights = [
//   { iconName: 'credit card', text: 'credit cards' },
//   { iconName: 'no children', text: 'no children allowed' },
// ];

<Description
  homeHighlights={homeHighlights}
  mainCharacteristics={propertyCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>;
```

### Content

#### Description text

```jsx
import { Description } from '@lodgify/ui';
const {
  descriptionText,
  homeHighlights,
  propertyCharacteristics
} = require("./mock-data/props");

<Description
  descriptionText={descriptionText}
  homeHighlights={homeHighlights}
  mainCharacteristics={propertyCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>;
```

#### Long description text

```jsx
import { Description } from '@lodgify/ui';
const {
  longDescriptionText,
  homeHighlights,
  propertyCharacteristics
} = require("./mock-data/props");

<Description
  descriptionText={longDescriptionText}
  homeHighlights={homeHighlights}
  mainCharacteristics={propertyCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>;
```

#### HTML description text

```jsx
import { Description } from '@lodgify/ui';
const {
  htmlDescriptionText,
  homeHighlights,
  propertyCharacteristics
} = require("./mock-data/props");

<Description
  descriptionText={htmlDescriptionText}
  homeHighlights={homeHighlights}
  mainCharacteristics={propertyCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>;
```

#### Strings

```jsx
import { Description } from '@lodgify/ui';
const {
  longDescriptionText,
  extraDescriptionText,
  homeHighlights,
  propertyCharacteristics
} = require("./mock-data/props");

<Description
  descriptionText={longDescriptionText}
  extraDescriptionButtonText="See more words"
  extraDescriptionText={extraDescriptionText}
  homeHighlights={homeHighlights}
  homeHighlightsHeadingText="Highlights"
  mainCharacteristics={propertyCharacteristics}
  propertyName="Lonely Lodge"
  propertyType="Bed & Breakfast"
/>;
```
