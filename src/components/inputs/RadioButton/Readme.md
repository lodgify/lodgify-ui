
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
class GroupedRadiosDemo extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedRadio: 'plane',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    this.setState({ selectedRadio: name });
  }

  render() {
    const { selectedRadio } = this.state;
    return (
      <div>
        <div>
          <RadioButton
            label="By plane"
            isChecked={selectedRadio === 'plane'}
            name="plane"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <RadioButton
            label="By train"
            isChecked={selectedRadio === 'train'}
            name="train"  
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

<GroupedRadiosDemo />
```

### States


#### Checked

```jsx
<RadioButton isChecked label="I am checked" />
```

#### Disabled

```jsx
<RadioButton isDisabled label="I am disabled"/>
```

#### Disabled and checked

```jsx
<RadioButton isDisabled isChecked label="I am disabled and checked"/>
```
