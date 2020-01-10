Toggle is a variation on the [`<Checkbox>` component](#checkbox).
Please refer to it for more information.

```jsx
import { Toggle } from '@lodgify/ui';

<Toggle />
```

### Variations

#### Labeled

```jsx
import { Toggle } from '@lodgify/ui';

<Toggle label="I am a Toggle" />
```

### States

#### Checked

```jsx
import { Toggle } from '@lodgify/ui';

<Toggle isChecked label="I am On" />
```

#### Disabled

```jsx
import { Toggle } from '@lodgify/ui';

<Toggle isDisabled label="I am disabled and Off" />
```

#### Disabled and checked

```jsx
import { Toggle } from '@lodgify/ui';

<Toggle isDisabled isChecked label="I am disabled and On" />
```

### Controlled toggle

```jsx
import { Toggle } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(false);
  return (
    <Toggle
      isChecked={value}
      onChange={(name, _value) => {
        setValue(_value);
      }}
      label={`the toggle is ${value ? 'on' : 'off'}`}
    />
  );
};

<Controller />;
```
