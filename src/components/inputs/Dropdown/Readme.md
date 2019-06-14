```jsx
const { options } = require('./mock-data/options');
// [
//  { text: 'France', value: 'fr' },
//  { text: 'Spain', value: 'es' },
//  { text: 'Germany', value: 'de' },
//  { text: 'United Kingdom', value: 'gb' },
// ];

<Dropdown label="Location" options={options} />;
```

### States

#### Error

```jsx
const { options } = require('./mock-data/options');
<div>
  <Dropdown error label="Location" options={options} />
  <Divider />
  <Divider />
  <Dropdown error="Something's not right" label="Location" options={options} />
</div>
```

#### Disabled

```jsx
const { options } = require('./mock-data/options');

<Dropdown isDisabled label="Location" options={options} />
```

#### Valid

```jsx
const { options } = require('./mock-data/options');

<Dropdown isValid label="Location" options={options} />
```

##### Valid with Icon

```jsx
const { options } = require('./mock-data/options');


<Dropdown isValid label="Location" options={options} icon="map pin" />
```

### Variations

#### Compact

```jsx
const { options } = require('./mock-data/options');

<Dropdown isCompact label="Location" options={options} />;
```

#### Dropdown opens above input

```jsx
const { options } = require('./mock-data/options');

<Dropdown willOpenAbove label="Location" options={options} />
```

#### Icon

The dropdown can contain an icon. [See all available icons](https://react.semantic-ui.com/elements/icon#icon-set)

```jsx
const { options } = require('./mock-data/options');
<Dropdown label="Location" options={options} icon="map pin" />;
```

#### Image

Options can contain images

```jsx
const { optionsWithImages } = require('./mock-data/options');
// [
//  {
//    text: 'La Casa Viva', value: 'casaViva',
//    imageUrl: '/path/to/image.png',
//    imageSrcSet: '/path/to/image.png?w=20 20w',
//    imageSizes: '(max-width: 320px) 20px'
//  },
//  {
//    text: 'La Casa Muerta', value: 'casaMuerta',
//    imageUrl: '/path/to/image.png',
//    imageSrcSet: '/path/to/image.png?w=20 20w',
//    imageSizes: '(max-width: 320px) 20px'
//  },
//  {
//    text: 'The White Lodge', value: 'whiteLodge',
//    imageUrl: '/path/to/image.png',
//    imageSrcSet: '/path/to/image.png?w=20 20w',
//    imageSizes: '(max-width: 320px) 20px'
//  },
//  {
//    text: 'The Black Lodge', value: 'blackLodge',
//    imageUrl: '/path/to/image.png',
//    imageSrcSet: '/path/to/image.png?w=20 20w',
//    imageSizes: '(max-width: 320px) 20px'
//  },
// ];

<Dropdown label="Properties" options={optionsWithImages} icon="map pin" />;
```

#### Indented options

```jsx
const { indentedOptions } = require('./mock-data/options');
// [
//    { text: 'United States', value: 'us' indent: 0},
//    { text: 'Texas', value: 'tx', indent: 1 },
//    { text: 'Colorado', value: 'co', indent: 2 },
//    { text: 'New York', value: 'ny', indent: 3 },
//    { text: 'Minessota', value: 'mi', indent: 4 },
//    { text: 'California', value: 'ca', indent: 5 },
// ];

<Dropdown label="Properties" options={indentedOptions} />;
```

#### Searchable

```jsx
const { options } = require('./mock-data/options');

<Dropdown
  isSearchable
  label="Location"
  noResultsText="Nothing found"
  options={options}
/>;
```

#### Label

```jsx
const { currencyOptions } = require('./mock-data/options');

// [
//   { text: 'EUR', value: 'eur', label: 'Euro' },
//   { text: 'GBP', value: 'gbp', label: 'British Pound' },
//   { text: 'USD', value: 'usd', label: 'US Dollar' },
//   { text: 'ZAR', value: 'zar', label: 'South African Rand' },
// ];

<Dropdown label="Currency" options={currencyOptions} />;
```
