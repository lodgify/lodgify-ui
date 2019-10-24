```jsx
<CounterInputSegment
  heading="Rooms and Bathrooms"
  counters={[
    { labelText: "Bedrooms", name: "bedrooms" },
    { labelText: "Bathrooms", name: "bathrooms" }
  ]}
/>
```

### Controlled

```jsx
const Controller = () => {
  const [values, setValues] = React.useState({});
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  const controlledCounters = [
    { 
      labelText: "Bedrooms",
      name: "bedrooms",
      value: values["bedrooms"],
      onChange,
    },
    { 
      labelText: "Bathrooms",
      name: "bathrooms",
      value: values["bathrooms"],
      onChange,
    }
  ];
  
  return (
    <CounterInputSegment
      heading="Rooms and Bathrooms"
      counters={controlledCounters}
    />
  );
};
<Controller />;
```
