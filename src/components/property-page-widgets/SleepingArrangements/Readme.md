```jsx
import { SleepingArrangements } from '@lodgify/ui';

const sleepingArrangements = [
  { iconName: 'double bed', label: '1 king bed' },
  { iconName: 'single bed', label: '2 single beds' },
  { iconName: 'paw', label: '1 kennel' },
  { iconName: 'paw', label: '1 cat' },
  { iconName: 'paw', label: '3 dogs' },
  { iconName: 'paw', label: '2 okapis' },
];

<SleepingArrangements sleepingArrangements={sleepingArrangements} />
```

### Content

#### Strings

```jsx
import { SleepingArrangements } from '@lodgify/ui';

const sleepingArrangements = [
  { iconName: 'double bed', label: '1 king bed' },
  { iconName: 'single bed', label: '2 single beds' },
  { iconName: 'paw', label: '1 kennel' },
  { iconName: 'paw', label: '1 cat' },
  { iconName: 'paw', label: '3 dogs' },
  { iconName: 'paw', label: '2 okapis' },
];

<SleepingArrangements
  headingText="Beds and bedrooms"
  sleepingArrangements={sleepingArrangements}
/>
```
