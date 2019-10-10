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
<div>
  <DateRangePicker displayFormat="D.M.YY" />
  <Divider />
  <DateRangePicker displayFormat="DD MMM YY" />
</div>
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
  getIsDayBlocked={
    moment => moment.format('dddd') === 'Friday'
  }
/>
```
