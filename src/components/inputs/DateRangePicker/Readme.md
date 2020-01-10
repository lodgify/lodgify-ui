```jsx
import { DateRangePicker } from '@lodgify/ui';

<DateRangePicker />
```

### States

#### Error

```jsx
import { DateRangePicker, Divider } from '@lodgify/ui';

<div>
  <DateRangePicker error />
  <Divider />
  <Divider />
  <DateRangePicker error="Something's not right" />
</div>
```

#### Valid

```jsx
import { DateRangePicker } from '@lodgify/ui';

<DateRangePicker isValid />
```

#### Loading

```jsx
import { DateRangePicker } from '@lodgify/ui';

<DateRangePicker isLoading />
```

### Variations

#### Display format

```jsx
import { DateRangePicker, Divider } from '@lodgify/ui';
const moment = require('moment');

<div>
  <DateRangePicker
    displayFormat="D.M.YY"
    value={{
      endDate: moment(),
      startDate: moment(),
    }}
  />
  <Divider />
  <DateRangePicker
    value={{
      endDate: moment(),
      startDate: moment(),
    }}
    displayFormat="DD MMM YY"
  />
</div>;
```

#### Placeholders

```jsx
import { DateRangePicker } from '@lodgify/ui';

<DateRangePicker
  endDatePlaceholderText="Check-out"
  startDatePlaceholderText="Check-in"
/>
```

#### Calendar opens above input

```jsx
import { DateRangePicker } from '@lodgify/ui';

<DateRangePicker willOpenAbove />
```

### Usage

#### Block days

```jsx
import { DateRangePicker } from '@lodgify/ui';

<DateRangePicker
  getIsDayBlocked={moment => moment.format('dddd') === 'Friday'}
/>
```

#### Controlled

```jsx
import { DateRangePicker } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(null);
  return (
    <DateRangePicker
      onChange={setValue}
      value={value}
      getIsDayBlocked={moment => moment.format('dddd') === 'Friday'}
    />
  );
};
<Controller />;
```
