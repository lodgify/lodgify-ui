export const options = [
  { text: 'France', value: 'fr' },
  { text: 'Spain', value: 'es' },
  { text: 'Germany', value: 'de' },
  { text: 'United Kingdom', value: 'gb' },
];

export const optionsWithImages = [
  {
    text: 'La Casa Viva',
    value: 'casaViva',
    image: require('./la-casa-viva.png'),
  },
  {
    text: 'La Casa Muerta',
    value: 'casaMuerta',
    image: require('./la-casa-muerta.png'),
  },
  {
    text: 'The White Lodge',
    value: 'whiteLodge',
    image: require('./the-black-lodge.png'),
  },
  {
    text: 'The Black Lodge',
    value: 'blackLodge',
    image: require('./the-white-lodge.png'),
  },
];

export const indentedOptions = [
  { text: 'United Kingdom', value: 'gb' },
  { text: 'United States', value: 'us' },
  { text: 'Texas', value: 'tx', indent: 1 },
  { text: 'California', value: 'ca', indent: 1 },
  { text: 'Los Angeles', value: 'la', indent: 2 },
];
