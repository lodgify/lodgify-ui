```jsx
<SingleDatePicker />
```

### States

#### Error

```jsx
<div>
  <SingleDatePicker error />
  <Divider />
  <Divider />
  <SingleDatePicker error="Something's not right" />
</div>
```

#### Valid

```jsx
<SingleDatePicker isValid />
```

### Variations

#### Display format

```jsx
<div>
  <SingleDatePicker displayFormat="D.M.YY" />
  <Divider />
  <SingleDatePicker displayFormat="DD MMM YY" />
</div>
```

#### Placeholders

```jsx
<SingleDatePicker
  placeholderText="Pick a date"
/>
```

#### Calendar opens above input

```jsx
<SingleDatePicker willOpenAbove />
```

### Usage

#### Block days

```jsx
<SingleDatePicker
  getIsDayBlocked={
    moment => moment.format('dddd') === 'Friday'
  }
/>
```
