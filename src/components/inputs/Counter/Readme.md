```jsx
<Counter />
```

### Variations

#### Controlled
```jsx
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
