```jsx
const headers = [
  'Rates',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

const body = [
  ['Default rate', '40', '30', '40', '40', '50', '60', '70'],
  ['Mid Season rate', '40', '40', '50', '60', '60', '70', '80'],
  ['High Season rate', '45', '45', '55', '65', '65', '75', '85'],
];

<Table tableHeadings={headers} tableBody={body} />
```

### Content

React components can be used as table items

```jsx
const { dropdownOptions } = require('./mock-data/props');

const headers = [
  <Dropdown key="location-dropdown" options={dropdownOptions} />,
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

const body = [
  ['Default rate', '40', '30', '40', '40', '50', '60', '70'],
  ['Mid Season rate', '40', '40', '50', '60', '60', '70', '80'],
  ['High Season rate', '45', '45', '55', '65', '65', '75', '85'],
];

<Table tableHeadings={headers} tableBody={body} tableId="table-with-component"/>
```
