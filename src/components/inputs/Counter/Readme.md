```jsx
import { Counter } from '@lodgify/ui';

<Counter />
```

### Variations

#### Controlled
```jsx
import { Counter } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(0);

  const onChange = (name, value) => {
    setValue(value);
  };

  return (
    <Counter 
      value={value}
      onChange={onChange}
    />
  );
}

<Controller />
```

#### Max value

```jsx
import { Counter } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(0);

  const onChange = (name, value) => {
    setValue(value);
  };

  return (
    <Counter 
      value={value}
      onChange={onChange}
      max={2}
    />
  );
}

<Controller />
```

### Content

#### Value

```jsx
import { Counter } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(0);

  const onChange = (name, value) => {
    setValue(value);
  };

  return (
    <Counter 
      value={value}
      onChange={onChange}
      renderValue={value => `${value}+`}
    />
  );
}

<Controller />
```

```jsx
import { Counter } from '@lodgify/ui';

const Controller = () => {
  const [value, setValue] = React.useState(0);

  const onChange = (name, value) => {
    setValue(value);
  };

  return (
    <Counter 
      value={value}
      onChange={onChange}
      max={3}
      renderValue={value => ([
        'zero',
        'one',
        'two',
        'three',
      ][value])}
    />
  );
}

<Controller />
```
