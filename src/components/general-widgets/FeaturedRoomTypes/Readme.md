```jsx
import { FeaturedRoomTypes } from '@lodgify/ui';

const featuredRoomTypes = [
  {
    bedsNumber: 3,
    guestsNumber: 3,
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    pricePerPeriod: '$280',
    ratingNumber: 4.8,
    roomTypeName: 'The Cat House',
    roomTypeUrl: '/',
  },
  {
    bedsNumber: 3,
    guestsNumber: 3,
    imageUrl: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
    locationName: 'Catania',
    pricePerPeriod: '$280',
    ratingNumber: 4.8,
    roomTypeName: 'The Cat House',
    roomTypeUrl: '/',
  },
];

<FeaturedRoomTypes
  featuredRoomTypes={featuredRoomTypes}
  headingText="Featured rooms"
/>
```

### States

#### Showing placeholder

```jsx
import { FeaturedRoomTypes } from '@lodgify/ui';

<FeaturedRoomTypes
  headingText="Featured rooms"
  isShowingPlaceholder
/>
```