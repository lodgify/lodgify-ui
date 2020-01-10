```jsx
import { Amenities } from '@lodgify/ui';

const amenities = [
  {
    name: 'Cooking',
    iconName: 'coffee',
    items: ['Toaster', 'Microwave', 'Coffee Machine'],
  },
  {
    name: 'Bathroom',
    iconName: 'bathroom',
    items: ['Bidet', 'Hair Dryer'],
  },
  {
    name: 'Laundry',
    iconName: 'leaf',
    items: ['Washer', 'Dryer', 'Iron & Board'],
  },
];

<Amenities amenities={amenities} />
```

#### Amenities with some extra items

```jsx
import { Amenities } from '@lodgify/ui';

const amenities = [
  {
    name: 'Cooking',
    iconName: 'coffee',
    items: ['Toaster', 'Microwave', 'Coffee Machine'],
  },
  {
    name: 'Bathroom',
    iconName: 'bathroom',
    items: ['Bidet', 'Hair Dryer'],
  },
  {
    name: 'Outside',
    iconName: 'sun',
    items: ['Tennis Court'],
  },
  {
    name: 'Spa & Gym',
    iconName: 'paw',
    items: ['Ping-Pong Table', 'Pool Table', 'Foosball'],
  },
  {
    name: 'Laundry',
    iconName: 'leaf',
    items: ['Washer', 'Dryer', 'Iron & Board'],
  },
  {
    name: 'Miscellaneous',
    iconName: 'coffee',
    items: [
      'Rice Steamer',
      'Hot Tub',
      'Fold-Away Bed',
      'Fireplace',
      'Steam Sauna',
      'Fitness-Room',
      'Parking',
      'Laundry Service',
    ],
  },
];

<Amenities amenities={amenities} />

```

#### Strings

```jsx
import { Amenities } from '@lodgify/ui';

const amenities = [
  {
    name: 'Cooking',
    iconName: 'coffee',
    items: ['Toaster', 'Microwave', 'Coffee Machine'],
  },
  {
    name: 'Bathroom',
    iconName: 'bathroom',
    items: ['Bidet', 'Hair Dryer'],
  },
  {
    name: 'Outside',
    iconName: 'sun',
    items: ['Tennis Court'],
  },
  {
    name: 'Spa & Gym',
    iconName: 'paw',
    items: ['Ping-Pong Table', 'Pool Table', 'Foosball'],
  },
  {
    name: 'Laundry',
    iconName: 'leaf',
    items: ['Washer', 'Dryer', 'Iron & Board'],
  },
  {
    name: 'Miscellaneous',
    iconName: 'coffee',
    items: [
      'Rice Steamer',
      'Hot Tub',
      'Fold-Away Bed',
      'Fireplace',
      'Steam Sauna',
      'Fitness-Room',
      'Parking',
      'Laundry Service',
    ],
  },
   {
    name: 'Further Info',
    iconName: 'further info',
    items: [
      'Accessible 24/7',
    ],
  },
];

<Amenities amenities={amenities} modalTriggerText="See more" amenitiesConjunctionText="and"/>
```

### Variations

#### With heading

```jsx
import { Amenities } from '@lodgify/ui';

const amenities = [
  {
    name: 'Cooking',
    iconName: 'coffee',
    items: ['Toaster', 'Microwave', 'Coffee Machine'],
  },
  {
    name: 'Bathroom',
    iconName: 'bathroom',
    items: ['Bidet', 'Hair Dryer'],
  },
  {
    name: 'Outside',
    iconName: 'sun',
    items: ['Tennis Court'],
  },
  {
    name: 'Spa & Gym',
    iconName: 'paw',
    items: ['Ping-Pong Table', 'Pool Table', 'Foosball'],
  },
  {
    name: 'Laundry',
    iconName: 'leaf',
    items: ['Washer', 'Dryer', 'Iron & Board'],
  },
  {
    name: 'Miscellaneous',
    iconName: 'coffee',
    items: [
      'Rice Steamer',
      'Hot Tub',
      'Fold-Away Bed',
      'Fireplace',
      'Steam Sauna',
      'Fitness-Room',
      'Parking',
      'Laundry Service',
    ],
  },
];

<Amenities amenities={amenities} headingText="Property Amenities" amenitiesConjunctionText="and"/>

```

#### Display as stacked

```jsx
import { Amenities } from '@lodgify/ui';

const amenities = [
  {
    name: 'Cooking',
    iconName: 'coffee',
    items: ['Toaster', 'Microwave', 'Coffee Machine'],
  },
  {
    name: 'Bathroom',
    iconName: 'bathroom',
    items: ['Bidet', 'Hair Dryer'],
  },
  {
    name: 'Laundry',
    iconName: 'leaf',
    items: ['Washer', 'Dryer', 'Iron & Board'],
  },
];

<Amenities amenities={amenities} headingText="Property Amenities" amenitiesConjunctionText="and" isStacked />

```

#### Display the extra items in a modal

```jsx
import { Amenities } from '@lodgify/ui';

const amenities = [
  {
    name: 'Cooking',
    iconName: 'coffee',
    items: ['Toaster', 'Microwave', 'Coffee Machine'],
  },
  {
    name: 'Bathroom',
    iconName: 'bathroom',
    items: ['Bidet', 'Hair Dryer'],
  },
  {
    name: 'Outside',
    iconName: 'sun',
    items: ['Tennis Court'],
  },
  {
    name: 'Spa & Gym',
    iconName: 'paw',
    items: ['Ping-Pong Table', 'Pool Table', 'Foosball'],
  },
  {
    name: 'Laundry',
    iconName: 'leaf',
    items: ['Washer', 'Dryer', 'Iron & Board'],
  },
  {
    name: 'Miscellaneous',
    iconName: 'coffee',
    items: [
      'Rice Steamer',
      'Hot Tub',
      'Fold-Away Bed',
      'Fireplace',
      'Steam Sauna',
      'Fitness-Room',
      'Parking',
      'Laundry Service',
    ],
  },
];


<Amenities hasExtraItemsInModal amenities={amenities} headingText="Property Amenities" amenitiesConjunctionText="and"/>

```
