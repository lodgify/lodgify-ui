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

### Variations

#### Display format

```jsx
<div>
  <DateRangePicker displayFormat="D.M.YY" />
  <Divider />
  <DateRangePicker displayFormat="DD MMM YY" />
</div>
```

#### Placeholders

```jsx
<DateRangePicker
  endDatePlaceholderText="Check-in"
  startDatePlaceholderText="Check-out"
/>
```

### Usage

#### Block days

```jsx
<DateRangePicker
  getIsDayBlocked={
    moment => moment.format('dddd') === 'Friday'
  }
/>
```
