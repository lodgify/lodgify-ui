```jsx
<TextArea />
```

### States

#### Error

```jsx
<div>
  <TextArea error />
  <Divider />
  <Divider />
  <TextArea error="Something's not right" />
</div>
```

#### Valid

```jsx
<TextArea isValid />
```

### Variations

#### Labeled

```jsx
<TextArea label="Search" />
```

#### Controlled

```jsx
const Controller = () => {
  const [value, setValue] = React.useState(null);
  return <TextArea value={value} onChange={setValue} />;
};
<Controller />;
```
