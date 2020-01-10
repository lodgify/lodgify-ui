```jsx
import { CounterDropdown } from '@lodgify/ui';

<CounterDropdown counterValue={1} />
```

#### Controlled
```jsx
import { CounterDropdown } from '@lodgify/ui';

const Controller = () => {
  const [counterValue, setCounterValue] = React.useState(0);

  const onChange = (name, counterValue) => {
    setCounterValue(counterValue);
  };

  return (
    <CounterDropdown 
      counterValue={counterValue}
      onChange={onChange}
    />
  );
}

<Controller />
```

### Variations

#### Max value

```jsx
import { CounterDropdown } from '@lodgify/ui';

const Controller = () => {
  const [counterValue, setCounterValue] = React.useState(0);

  const onChange = (name, counterValue) => {
    setCounterValue(counterValue);
  };

  return (
    <CounterDropdown 
      counterValue={counterValue}
      onChange={onChange}
      maximumCounterValue={3}
    />
  );
}

<Controller />
```

### Strings

```jsx
import { CounterDropdown } from '@lodgify/ui';

<CounterDropdown
  dropdownLabel="pick guests"
/>
```

### Dropdown opens above

```jsx
import { CounterDropdown } from '@lodgify/ui';

<CounterDropdown
  willOpenAbove
/>
```
