```jsx
const { checkboxes } = require('./mock-data/checkboxes');

<CheckboxInputSegment heading="Amenities" checkboxes={checkboxes} />;
```

### Controlled

```jsx
const { checkboxes } = require('./mock-data/checkboxes');
const Controller = () => {
  const [values, setValues] = React.useState({});
  const onChange = ({ name, value }) => {
    setValues({ ...values, [name]: value });
  };
  const controlledCheckboxes = checkboxes.map(c => ({
    ...c,
    onChange,
    name: c.label,
    isChecked: values[c.label],
  }));
  return (
    <React.Fragment>
      <CheckboxInputSegment
        heading="Amenities"
        checkboxes={controlledCheckboxes}
      />
      <p>Selected Amenities:</p>
      <ul>
        {Object.keys(values)
          .filter(k => values[k])
          .map(k => (
            <li key={k}>{k}</li>
          ))}
      </ul>
    </React.Fragment>
  );
};
<Controller />;
```
