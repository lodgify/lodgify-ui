```jsx
<DateRangePicker />
```

### States

#### Error

```jsx
<div>
  <DateRangePicker error />
  <Divider />
  <Divider />
  <DateRangePicker error="Something's not right" />
</div>
```

#### Valid

```jsx
<DateRangePicker isValid />
```

#### Loading

```jsx
<DateRangePicker isLoading />
```

### Variations

#### Display format

```jsx
const moment = require('moment');
<div>
  <DateRangePicker
    displayFormat="D.M.YY"
    value={{
      endDate: moment(),
      startDate: moment(),
    }}
  />
  <Divider />
  <DateRangePicker
    value={{
      endDate: moment(),
      startDate: moment(),
    }}
    displayFormat="DD MMM YY"
  />
</div>;
```

#### Placeholders

```jsx
<DateRangePicker
  endDatePlaceholderText="Check-out"
  startDatePlaceholderText="Check-in"
/>
```

#### Calendar opens above input

```jsx
<DateRangePicker willOpenAbove />
```

### Usage

#### Block days

```jsx
<DateRangePicker
  getIsDayBlocked={moment => moment.format('dddd') === 'Friday'}
/>
```

#### Controlled

```jsx
const Controller = () => {
  const [value, setValue] = React.useState(null);
  return (
    <DateRangePicker
      onChange={setValue}
      value={value}
      getIsDayBlocked={moment => moment.format('dddd') === 'Friday'}
    />
  );
};
<Controller />;
```
