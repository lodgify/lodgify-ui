```jsx
<CounterDropdown counterValue={1} />
```

#### Controlled
```jsx
const Controller = () => {
  const [counterValue, setCounterValue] = React.useState(0);

  const onChange = (name, counterValue) => {
    setCounterValue(counterValue);
  };

  return (
    <CounterDropdown 
      counterValue={counterValue}
      onChange={onChange}
    />
  );
}

<Controller />
```

### Variations

#### Max value

```jsx
const Controller = () => {
  const [counterValue, setCounterValue] = React.useState(0);

  const onChange = (name, counterValue) => {
    setCounterValue(counterValue);
  };

  return (
    <CounterDropdown 
      counterValue={counterValue}
      onChange={onChange}
      maximumCounterValue={3}
    />
  );
}

<Controller />
```

### Strings

```jsx
<CounterDropdown
  counterLabel="number of guests"
  dropdownLabel="pick guests"
/>
```

### Dropdown opens above

```jsx
<CounterDropdown
  willOpenAbove
/>
```
