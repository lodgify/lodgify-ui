Toggle is a variation on the [`<Checkbox>` component](#checkbox).
Please refer to it for more information.

```jsx
<Toggle />
```

### Variations

#### Labeled

```jsx
<Toggle label="I am a Toggle" />
```

### States

#### Checked

```jsx
<Toggle isChecked label="I am On" />
```

#### Disabled

```jsx
<Toggle isDisabled label="I am disabled and Off" />
```

#### Disabled and checked

```jsx
<Toggle isDisabled isChecked label="I am disabled and On" />
```

### Controlled toggle

```jsx
const Controller = () => {
  const [value, setValue] = React.useState(false);
  return (
    <Toggle
      isChecked={value}
      onChange={({ value: _value }) => {
        console.log(_value);
        setValue(_value);
      }}
      label={`the toggle is ${value ? 'on' : 'off'}`}
    />
  );
};

<Controller />;
```
