```jsx
import { FeaturedProperty } from '@lodgify/ui';

<FeaturedProperty
  bedroomsNumber={3}
  guestsNumber={3}
  imageUrl="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
  locationName="Catania"
  pricePerPeriod="$280"
  pricePerPeriodPrefix="from"
  propertyName="The Cat House"
  propertyType="Bed and breakfast"
  propertyUrl="/"
  ratingNumber={4.8}
/>
```

### States

#### Showing placeholder

```jsx
import { FeaturedProperty } from '@lodgify/ui';

<FeaturedProperty
  bedroomsNumber={0}
  guestsNumber={0}
  imageUrl=""
  isShowingPlaceholder
  locationName=""
  pricePerPeriod=""
  pricePerPeriodPrefix=""
  propertyName=""
  propertyType=""
  propertyUrl=""
  ratingNumber={0}
/>
```
