```jsx
import { NumberInput } from '@lodgify/ui';

<NumberInput />
```

### States

#### Error

```jsx
import { NumberInput, Divider } from '@lodgify/ui';

<div>
  <NumberInput error />
  <Divider />
  <Divider />
  <NumberInput error="Something's not right" />
</div>
```

#### Valid

```jsx
import { NumberInput } from '@lodgify/ui';

<NumberInput isValid />
```

### Variations

#### Labeled

```jsx
import { NumberInput } from '@lodgify/ui';

<NumberInput label="Number of wins" />
```

#### Minimum and Maximum

```jsx
import { NumberInput } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState();
  return <NumberInput min={0} max={3} onChange={setValue} value={value} />;
};
<Controller />;
```

#### Initialize with Value and Label

```jsx
import { NumberInput } from '@lodgify/ui';

<NumberInput min={0} max={3} label="Label" value={5} />
```
