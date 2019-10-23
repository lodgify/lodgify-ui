```jsx
<NumberInput />
```

### States

#### Error

```jsx
<div>
  <NumberInput error />
  <Divider />
  <Divider />
  <NumberInput error="Something's not right" />
</div>
```

#### Valid

```jsx
<NumberInput isValid />
```

### Variations

#### Labeled

```jsx
<NumberInput label="Number of wins" />
```

#### Minimum and Maximum

```jsx
const Controller = () => {
  const [value, setValue] = React.useState();
  return <NumberInput min={0} max={3} onChange={setValue} value={value} />;
};
<Controller />;
```

#### Initialize with Value and Label

```jsx
<NumberInput min={0} max={3} label="Label" value={5} />
```
