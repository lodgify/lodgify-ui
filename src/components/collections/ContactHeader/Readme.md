```jsx

const currencyOptions = [
  { text: 'EUR', value: 'EUR', label: 'Euro' },
  { text: 'USD', value: 'USD', label: 'US Dollar' },
  { text: 'JPY', value: 'JPY', label: 'Japanese Yen' },
];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'German', value: 'de' },
  { text: 'Japanese', value: 'jp' },
  { text: 'Italian', value: 'it' },
];

  <ContactHeader
  logoSubText="King of Joy"
  logoHref="Balalala"
  logoSize="medium"
  logoSrc="https://li5.cdbcdn.com/oh/a84645c0-0a35-4735-bda5-e5c425c2ffdc.png"
  className='ma-ma-ma'
  isBackgroundFilled={true}
  phoneNumber={'+1 2345 678912'}
  currencyOptions={currencyOptions}
  currencyValue={currencyOptions[0].value}
  languageOptions={languageOptions}
  languageValue={languageOptions[0].value}
  navigationMenuItems={[
  {
    text: 'availability',
    link: '#availability',
    isActive: true,
  },
  {
    text: 'rates',
    link: '#rates',
    subItems: [
      {
        href: '/la-casa-viva',
        text: 'La Casa Viva',
      },
      {
        href: '/la-casa-muerta',
        text: 'La Casa Muerta',
      },
      {
        href: '/the-white-lodge',
        text: 'The White Lodge',
      },
      {
        href: '/the-black-lodge',
        text: 'The Black Lodge',
      },
    ],
  },
  {
    text: 'reviews',
    link: '#reviews',
  },
  {
    text: 'description',
    link: '#link',
  },
  {
    text: 'other stuff',
    link: '#link',
  },
  {
    text: 'almost the last one',
    link: '#link',
  },
  {
    text: 'not the last one',
    link: '#link',
  },
  {
    text: 'last',
    link: '#link',
  },
]
}
primaryCTA={{ onClick: console.log, text: 'Book now'}}
  />
```

