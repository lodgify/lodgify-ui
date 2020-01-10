```jsx
import { Rules } from '@lodgify/ui';

const checkInTime = '09.00 PM';
const checkOutTime = '12.00 AM';
const rules = ['Smoking not allowed', 'No parties or events', 'Pets are allowed'];

<Rules
  checkInTime={checkInTime}
  checkOutTime={checkOutTime}
  rules={rules}
/>
```

### Content

#### Strings

```jsx
import { Rules } from '@lodgify/ui';

const checkInTime = '09.00 PM';
const checkOutTime = '12.00 AM';
const rules = ['Smoking not allowed', 'No parties or events', 'Pets are allowed'];

<Rules
  checkInTime={checkInTime}
  checkInTimeLabel="Come in from"
  checkOutTime={checkOutTime}
  checkOutTimeLabel="Leave at"
  headingText="My Heading"
  rules={rules}
/>
```
