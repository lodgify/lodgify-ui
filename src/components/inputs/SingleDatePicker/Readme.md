```jsx
import { SingleDatePicker } from '@lodgify/ui';

<SingleDatePicker />
```

### States

#### Error

```jsx
import { SingleDatePicker, Divider } from '@lodgify/ui';

<div>
  <SingleDatePicker error />
  <Divider />
  <Divider />
  <SingleDatePicker error="Something's not right" />
</div>
```

#### Valid

```jsx
import { SingleDatePicker } from '@lodgify/ui';

<SingleDatePicker isValid />
```

### Variations

#### Display format

```jsx
import { SingleDatePicker, Divider } from '@lodgify/ui';

<div>
  <SingleDatePicker displayFormat="D.M.YY" />
  <Divider />
  <SingleDatePicker displayFormat="DD MMM YY" />
</div>
```

#### Placeholders

```jsx
import { SingleDatePicker } from '@lodgify/ui';

<SingleDatePicker placeholderText="Pick a date" />
```

#### Calendar opens above input

```jsx
import { SingleDatePicker } from '@lodgify/ui';

<SingleDatePicker willOpenAbove />
```

### Usage

#### Block days

```jsx
import { SingleDatePicker } from '@lodgify/ui';

<SingleDatePicker
  getIsDayBlocked={moment => moment.format('dddd') === 'Friday'}
/>
```

#### Controlled

```jsx
import { SingleDatePicker } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(null);
  return (
    <SingleDatePicker
      onChange={setValue}
      value={value}
      getIsDayBlocked={moment => moment.format('dddd') === 'Friday'}
    />
  );
};
<Controller />;
```
