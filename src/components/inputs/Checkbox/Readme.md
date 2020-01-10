```jsx
import { Checkbox } from '@lodgify/ui';

<Checkbox />
```

### Variations

#### Labeled

```jsx
import { Checkbox } from '@lodgify/ui';

<Checkbox label="I am a checkbox" />
```

#### Left labeled

```jsx
import { Checkbox } from '@lodgify/ui';

<Checkbox isLabelLeft label="I am a left labeled checkbox" />
```

#### Fluid

```jsx
import { Checkbox } from '@lodgify/ui';

<Checkbox isFluid label="I am a fluid checkbox" />
```

### States

#### Checked

```jsx
import { Checkbox } from '@lodgify/ui';

<Checkbox isChecked label="I am checked" />
```

#### Error

```jsx
import { Checkbox, Divider } from '@lodgify/ui';

<div>
  <Checkbox error />
  <Divider />
  <Divider />
  <Checkbox error="Something's not right" />
</div>
```

#### Disabled

```jsx
import { Checkbox } from '@lodgify/ui';

<Checkbox isDisabled label="I am disabled" />
```

#### Disabled and checked

```jsx
import { Checkbox } from '@lodgify/ui';

<Checkbox isDisabled isChecked label="I am disabled and checked" />
```

### Controlled checkbox

```jsx
import { Checkbox } from '@lodgify/ui';

const Controller = () => {
  const [currentValue, setCurrentValue] = React.useState(false);
  return (
    <Checkbox
      isChecked={currentValue}
      onChange={(name, value) => {
        setValue(value);
      }}
      label={`the checkbox is ${currentValue ? 'checked' : 'unchecked'}`}
    />
  );
};

<Controller />;
```
