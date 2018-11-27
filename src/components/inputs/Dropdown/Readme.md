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

#### Dropdown opens above input

```jsx
const { options } = require('./mock-data/options');

<Dropdown willOpenAbove label="Location" options={options} />
```

#### Valid

```jsx
const { options } = require('./mock-data/options');

<div>
  <Dropdown isValid label="Location" options={options} />
</div>
```

##### Valid with Icon

```jsx
const { options } = require('./mock-data/options');

<div>
  <Dropdown isValid label="Location" options={options} icon="map pin" />
</div>
```

### Variations

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
//   { text: 'United States', value: 'us' }, 
//   { text: 'Texas', value: 'tx', indent: 1 },
//   { text: 'California', value: 'ca', indent: 1 },
//   { text: 'Los Angeles', value: 'la', indent: 2 },
// ];

<Dropdown label="Properties" options={indentedOptions} />;
```
