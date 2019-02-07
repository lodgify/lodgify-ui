```jsx
const currencyOptions = [
  { text: 'EUR €', value: 'eur', label: 'Euro' },
  { text: 'GBP £', value: 'gbp', label: 'British Pound' },
  { text: 'USD $', value: 'usd', label: 'US Dollar' },
];
const rateCategories = [
  {
    name: 'Mid Season',
    dateRange: '01/02/2018 - 01/04/2018',
    numberOfGuests: '2',
    costPerExtraGuest: '5€',
    rates: ['30€', '40€', '70€'],
  },
  {
    name: 'High Season',
    dateRange: '01/05/2018 - 01/08/2018',
    numberOfGuests: '2',
    costPerExtraGuest: '5€',
    rates: ['30€', '40€', '70€'],
  },
  {
    name: 'Default Season',
    dateRange: '02/08/2018 - 01/02/2019',
    numberOfGuests: '2',
    costPerExtraGuest: '5€',
    rates: ['30€', '40€', '70€'],
  },
];
const rateHeadings = ['Daily', 'Weekly', 'Monthly'];


<Rates currencyOptions={currencyOptions} rateHeadings={rateHeadings} rateCategories={rateCategories} />
```

### Variations

With multi room type selector

```jsx
const currencyOptions = [
  { text: 'EUR €', value: 'eur', label: 'Euro' },
  { text: 'GBP £', value: 'gbp', label: 'British Pound' },
  { text: 'USD $', value: 'usd', label: 'US Dollar' },
];
const roomTypes = [
  {
    text: 'King suite',
    value: 'kingSuite',
    imageUrl: require('./mock-data/king-suite.png'),
  },
  {
    text: 'Safari Room',
    value: 'safariRoom',
    imageUrl: require('./mock-data/safari-room.png'),
  },
  {
    text: 'The Red Room',
    value: 'redRoom',
    imageUrl: require('./mock-data/the-red-room.png'),
  },
  {
    text: 'Junior Suite',
    value: 'juniorSuite',
    imageUrl: require('./mock-data/junior-suite.png'),
  },
];
const rateCategories = [
  {
    name: 'Mid Season',
    dateRange: '01/05/2018 - 01/08/2018',
    numberOfGuests: '2',
    costPerExtraGuest: '5€',
    rates: ['30€', '30€', '32€', '27€', '50€', '60€', '100€', '200€', '700€'],
  },
  {
    name: 'Mid Season',
    dateRange: '01/05/2018 - 01/08/2018',
    numberOfGuests: '2',
    costPerExtraGuest: '5€',
    rates: ['30€', '30€', '32€', '27€', '50€', '60€', '100€', '200€', '700€'],
  },
  {
    name: 'Mid Season',
    dateRange: '01/05/2018 - 01/08/2018',
    numberOfGuests: '2',
    costPerExtraGuest: '5€',
    rates: ['30€', '30€', '32€', '27€', '50€', '60€', '100€', '200€', '700€'],
  },
];
const rateHeadings = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Weekly', 'Monthly'];

<Rates currencyOptions={currencyOptions} rateCategories={rateCategories} rateHeadings={rateHeadings} roomTypes={roomTypes} />
```

### Content

#### Strings

```jsx
const currencyOptions = [
  { text: 'EUR €', value: 'eur', label: 'Euro' },
];
const roomTypes = [
  {
    text: 'King suite',
    value: 'kingSuite',
    imageUrl: require('./mock-data/king-suite.png'),
  },
  {
    text: 'Safari Room',
    value: 'safariRoom',
    imageUrl: require('./mock-data/safari-room.png'),
  },
  {
    text: 'The Red Room',
    value: 'redRoom',
    imageUrl: require('./mock-data/the-red-room.png'),
  },
  {
    text: 'Junior Suite',
    value: 'juniorSuite',
    imageUrl: require('./mock-data/junior-suite.png'),
  },
];
const rateCategories = [
  {
    name: 'Mid Season',
    dateRange: '01/02/2018 - 01/04/2018',
    numberOfGuests: '2',
    costPerExtraGuest: '5€',
    rates: ['30€', '40€', '70€'],
  }
];
const rateHeadings = ['Daily', 'Weekly', 'Monthly'];

const roomTypeInputLabel = 'View Rates for';
const costPerExtraGuestLabel = 'Price per extra guest';

<Rates
  costPerExtraGuestLabel={costPerExtraGuestLabel}
  currencyOptions={currencyOptions}
  rateCategories={rateCategories}
  rateHeadings={rateHeadings}
  roomTypeInputLabel={roomTypeInputLabel}
  roomTypes={roomTypes}
/>
```

### States

#### Showing placeholder

```jsx
<Rates
  currencyOptions={[]}
  isShowingPlaceholder
  rateCategories={[]}
  rateHeadings={[]}
  roomTypes={[]}
/>
```
