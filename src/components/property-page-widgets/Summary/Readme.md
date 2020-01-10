```jsx
import { Summary } from '@lodgify/ui';

<Summary
  locationName="Catania"
  pricePerPeriod="$280"
  pricePerPeriodPrefix="from"
  propertyName="The Cat House"
  ratingNumber={4.8}
/>
```
#### State

##### Showing placeholders

```jsx
import { Summary } from '@lodgify/ui';

<Summary
  isShowingPlaceholder
  locationName="Catania"
  propertyName="The Cat House"
/>
```

### Variations

#### Display only the price and rating

```jsx
import { Summary } from '@lodgify/ui';

<Summary
  areOnlyNightPriceAndRatingDisplayed
  locationName="Catania"
  pricePerPeriod="$280"
  pricePerPeriodPrefix="from"
  propertyName="The Cat House"
  ratingNumber={4.8}
/>
```
#### State

##### Showing placeholders

```jsx
import { Summary } from '@lodgify/ui';

<Summary
  areOnlyNightPriceAndRatingDisplayed
  isShowingPlaceholder
  locationName="Catania"
  propertyName="The Cat House"
/>
```