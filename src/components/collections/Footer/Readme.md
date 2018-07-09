```jsx
const currencyOptions = [
  { text: 'EUR', value: 'EUR' },
  { text: 'USD', value: 'USD' },
  { text: 'JPY', value: 'JPY' },
];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'German', value: 'de' },
  { text: 'Japanese', value: 'jp' },
  { text: 'Italian', value: 'it' },
];
const navigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  { href: '/pool', text: 'Pool' },
  { href: '/spa', text: 'Spa' },
  { href: '/tennis-court', text: 'Tennis Court' },
  { href: '/gym', text: 'Gym' },
];
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'twitter' },
  { href: 'https://instagram.com/lodgify', iconName: 'instagram' },
];

<Footer
  businessName="Feline Vacations"
  currencyOptions={currencyOptions}
  languageOptions={languageOptions}
  navigationItems={navigationItems}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
  socialMediaLinks={socialMediaLinks}
/>
```

### Content

#### Grouped navigation items

```jsx
const currencyOptions = [
  { text: 'EUR', value: 'EUR' },
  { text: 'USD', value: 'USD' },
  { text: 'JPY', value: 'JPY' },
];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'German', value: 'de' },
  { text: 'Japanese', value: 'jp' },
  { text: 'Italian', value: 'it' },
];
const navigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  {
    text: 'The Property',
    subItems: [
      { href: '/pool', text: 'Pool' },
      { href: '/spa', text: 'Spa' },
      { href: '/tennis-court', text: 'Tennis Court' },
      { href: '/gym', text: 'Gym' },
    ],
  },
  {
    text: 'The Owners',
    subItems: [
      { href: '/cats', text: 'They are cats' },
      { href: '/cute-cats', text: 'They are cute cats' },
    ],
  },
  { href: '/awards', text: 'Awards' },
  { href: '/press-releases', text: 'Press releases' },
];
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'twitter' },
  { href: 'https://instagram.com/lodgify', iconName: 'instagram' },
];

<Footer
  businessName="Feline Vacations"
  currencyOptions={currencyOptions}
  languageOptions={languageOptions}
  navigationItems={navigationItems}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
  socialMediaLinks={socialMediaLinks}
/>
```
