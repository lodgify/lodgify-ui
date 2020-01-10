```jsx
import { TextInput } from '@lodgify/ui';

<TextInput />
```

### States

#### Error

```jsx
import { TextInput, Divider } from '@lodgify/ui';

<div>
  <TextInput error />
  <Divider />
  <Divider />
  <TextInput error="Something's not right" />
</div>
```

#### Valid

```jsx
import { TextInput } from '@lodgify/ui';

<TextInput isValid />
```

### Variations

#### Labeled

```jsx
import { TextInput } from '@lodgify/ui';

<TextInput label="Search" />
```

#### Type

```jsx
import { TextInput } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(null);
  return (
    <TextInput
      value={value}
      onChange={setValue}
      label="Password"
      type="password"
    />
  );
};
<Controller />;
```

#### Fluid

A fluid input fills the width of its container.

```jsx
import { TextInput } from '@lodgify/ui';

<TextInput isFluid />
```

#### Controlled

```jsx
import { TextInput } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(null);
  return (
    <React.Fragment>
      <TextInput value={value} onChange={setValue} />
      <p>{value}</p>
    </React.Fragment>
  );
};
<Controller />;
```
