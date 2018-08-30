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
//  { text: 'La Casa Viva', value: 'casaViva', image: '/path/to/image.png' },
//  { text: 'La Casa Muerta', value: 'casaMuerta', image: '/path/to/image.png' },
//  { text: 'The White Lodge', value: 'whiteLodge', image: '/path/to/image.png' },
//  { text: 'The Black Lodge', value: 'blackLodge', image: '/path/to/image.png' },
// ];

<Dropdown label="Properties" options={optionsWithImages} icon="map pin" />;
```
