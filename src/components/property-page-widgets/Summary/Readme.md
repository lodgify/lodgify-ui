```jsx
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
<Summary
  isShowingPlaceholder
  locationName="Catania"
  propertyName="The Cat House"
/>
```

### Variations

#### Display only the price and rating

```jsx
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
<Summary
  areOnlyNightPriceAndRatingDisplayed
  isShowingPlaceholder
  locationName="Catania"
  propertyName="The Cat House"
/>
```