RadioButton is a variation on the [`<Checkbox>` component](#checkbox).
Please refer to it for more information.

```jsx
<RadioButton />
```

### Variations

#### Labeled

```jsx
<RadioButton label="I am a radio button" />
```

#### Grouped

RadioButtons in a group must be [controlled components](https://reactjs.org/docs/forms.html#controlled-components).

```jsx
const GroupedRadiosDemo = () => {
  const [selectedRadio, setSelectedRadio] = React.useState('plane');
  const change = name => {
    setSelectedRadio(name);
  };
  return (
    <div>
      <div>
        <RadioButton
          label="By plane"
          isChecked={selectedRadio === 'plane'}
          name="plane"
          onChange={change}
        />
      </div>
      <div>
        <RadioButton
          label="By train"
          isChecked={selectedRadio === 'train'}
          name="train"
          onChange={change}
        />
      </div>
    </div>
  );
};

<GroupedRadiosDemo />;
```

### States

#### Checked

```jsx
<RadioButton isChecked label="I am checked" />
```

#### Disabled

```jsx
<RadioButton isDisabled label="I am disabled" />
```

#### Disabled and checked

```jsx
<RadioButton isDisabled isChecked label="I am disabled and checked" />
```
