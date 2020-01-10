```jsx
import { CheckboxInputSegment } from '@lodgify/ui';
const { checkboxes } = require('./mock-data/checkboxes');

<CheckboxInputSegment heading="Amenities" checkboxes={checkboxes} />;
```

### Controlled

```jsx
import { CheckboxInputSegment } from '@lodgify/ui';
const { checkboxes } = require('./mock-data/checkboxes');

const Controller = () => {
  const [values, setValues] = React.useState({});
  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  const controlledCheckboxes = checkboxes.map(checkbox => ({
    ...checkbox,
    onChange,
    name: checkbox.label,
    isChecked: values[checkbox.label],
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
          .filter(key => values[key])
          .map(key => (
            <li key={key}>{key}</li>
          ))}
      </ul>
    </React.Fragment>
  );
};
<Controller />;
```
