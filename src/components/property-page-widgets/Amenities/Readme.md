```jsx
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

```jsx
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

#### Amenities with heading

```jsx
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

<Amenities amenities={amenities} headingText="Property Amenities" />

```