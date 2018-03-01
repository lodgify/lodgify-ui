
RadioButton is a variation on the [`<Checkbox>` component](#checkbox)
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
class GroupedRadiosDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'cheeseburger'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, { value }){
    this.setState({ selectedValue: value });
  } 
  render() {
    const { selectedValue } = this.state;
    return (
      <div>
        <div>
          <RadioButton label="Cheeseburger" value="cheeseburger" isChecked={selectedValue === 'cheeseburger'} onChange={this.handleChange} />
        </div>
        <div>
          <RadioButton label="Pizza" value="pizza"  isChecked={selectedValue === 'pizza'} onChange={this.handleChange} />
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

