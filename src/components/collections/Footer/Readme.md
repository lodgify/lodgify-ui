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
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'twitter' },
  { href: 'https://instagram.com/lodgify', iconName: 'instagram' },
];

<Footer
  currencyOptions={currencyOptions}
  currencyValue={currencyOptions[0].value}
  languageOptions={languageOptions}
  languageValue={languageOptions[0].value}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
  socialMediaLinks={socialMediaLinks}
  faxNumber={'+1 2345 678912'}
  emailAddress={'mrtom@pur.com'}
/>
```

### Content

#### Email capture

```jsx
<Footer
  hasEmailCapture
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
/>
```

#### Navigation bar

```jsx
const navigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  { href: '/pool', text: 'Pool' },
  { href: '/spa', text: 'Spa' },
  { href: '/tennis-court', text: 'Tennis Court' },
  { href: '/gym', text: 'Gym' },
];

<Footer
  navigationItems={navigationItems}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
/>
```

#### Grouped navigation items

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
  currencyOptions={currencyOptions}
  currencyValue={currencyOptions[0].value}
  languageOptions={languageOptions}
  languageValue={languageOptions[0].value}
  navigationItems={navigationItems}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
  socialMediaLinks={socialMediaLinks}
/>
```

#### Strings

```jsx
const currencyOptions = [
  { text: 'EUR', value: 'EUR', label: 'Euro' },
];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'Italian', value: 'it' },
];
const navigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  { href: '/gym', text: 'Gym' },
];
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'twitter' },
];

<Footer
  copyrightText="\u00A9 2018 Feline Vacations. All rights reserved."
  currencyOptions={currencyOptions}
  currencyValue={currencyOptions[0].value}
  emailAddress="john@snow.com"
  emailAddressLabel="Email >"
  faxNumber="+9 8765 432101"
  faxNumberLabel="Fax >"
  languageOptions={languageOptions}
  languageValue={languageOptions[0].value}
  navigationItems={navigationItems}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
  socialMediaLinks={socialMediaLinks}
/>
```

#### Without Currency Options

```jsx
const currencyOptions = [];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'Italian', value: 'it' },
];
const navigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  { href: '/gym', text: 'Gym' },
];
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'twitter' },
];

<Footer
  copyrightText="\u00A9 2018 Feline Vacations. All rights reserved."
  currencyOptions={currencyOptions}
  languageOptions={languageOptions}
  languageValue={languageOptions[0].value}
  navigationItems={navigationItems}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
  socialMediaLinks={socialMediaLinks}
/>
```

#### Without Language Options

```jsx
const currencyOptions = [
  { text: 'EUR', value: 'EUR', label: 'Euro' },
  { text: 'USD', value: 'USD', label: 'US Dollar' },
];
const languageOptions = [];
const navigationItems = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' },
  { href: '/gym', text: 'Gym' },
];
const socialMediaLinks = [
  { href: 'https://twitter.com/lodgify', iconName: 'twitter' },
];

<Footer
  copyrightText="\u00A9 2018 Feline Vacations. All rights reserved."
  currencyOptions={currencyOptions}
  currencyValue={currencyOptions[0].value}
  languageOptions={languageOptions}
  navigationItems={navigationItems}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
  socialMediaLinks={socialMediaLinks}
/>
```

### Usage

#### Control dropdown values

```jsx
const currencyOptions = [
  { text: 'EUR', value: 'EUR', label: 'Euro' },
  { text: 'USD', value: 'USD', label: 'US Dollar' },
  { text: 'JPY', value: 'JPY', label: 'Japanese Yen' },
];
const languageOptions = [
  { text: 'English', value: 'en' },
  { text: 'German', value: 'de' },
];
const navigationItems = [
  { href: '/', text: 'Home' },
];

class FooterController extends React.Component {
  constructor () {
    super();
    this.state = {
      currencyValue: null,
      languageValue: null
    }
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this)
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  handleChangeCurrency ({ value }) {
    this.setState({ currencyValue: value })
  }

  handleChangeLanguage ({ value }) {
    this.setState({ languageValue: value })
  }

  render () {
    return (
      <Footer
        currencyOptions={currencyOptions}
        currencyValue={this.state.currencyValue || currencyOptions[0].value}
        languageOptions={languageOptions}
        languageValue={this.state.languageValue || languageOptions[0].value}
        navigationItems={navigationItems}
        onChangeCurrency={this.handleChangeCurrency}
        onChangeLanguage={this.handleChangeLanguage}
        phoneNumber={'+1 2345 678912'}
        propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
      />
    );
  };
}

<FooterController />
```
