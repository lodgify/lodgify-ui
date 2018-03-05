```jsx
const { options } = require('./mock-data/options');
// [
//  { text: 'France', value: 'fr' },
//  { text: 'Spain', value: 'es' },
//  { text: 'Germany', value: 'de' },
//  { text: 'United Kingdom', value: 'gb' },
// ];

<Dropdown
  label="Location"
  options={options}
/>
```

### Content

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

<Dropdown
  label="Properties"
  options={optionsWithImages}
/>
```
