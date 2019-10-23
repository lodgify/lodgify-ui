```jsx
<TextInput />
```

### States

#### Error

```jsx
<div>
  <TextInput error />
  <Divider />
  <Divider />
  <TextInput error="Something's not right" />
</div>
```

#### Valid

```jsx
<TextInput isValid />
```

### Variations

#### Labeled

```jsx
<TextInput label="Search" />
```

#### Type

```jsx
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
<TextInput isFluid />
```

#### Controlled

```jsx
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
