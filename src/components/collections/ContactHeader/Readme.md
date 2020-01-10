```jsx
import { ContactHeader } from '@lodgify/ui';

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

<div style={{ backgroundColor: 'pink'}}>
  <ContactHeader
  headingText='Lindblum'
  className='ma-ma-ma'
  isBackgroundFilled={true}
  primaryButtonText="VUUC"
  phoneNumber={'+1 2345 678912'}
  headingHref="http://www.sss.com"
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
  />
</div>
```

