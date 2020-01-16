```jsx
const { backgroundImageUrl, navigationItems, currencyOptions, languageOptions } = require('./mock-data/mock-data');

<ContactHomeHero
  headerLogoSubText="King of Joy"
  headerLogoHref="Balalala"
  headerLogoSize="medium"
  headerLogoSrc="https://li5.cdbcdn.com/oh/a84645c0-0a35-4735-bda5-e5c425c2ffdc.png"
  backgroundImageUrl={backgroundImageUrl}
  headingText="Land of mechanical ships"
  className='ma-ma-ma'
  isBackgroundFilled={true}
  onChangeCurrency={console.log}
  onChangeLanguage={console.log}
  phoneNumber={'+1 2345 678912'}
  currencyOptions={currencyOptions}
  currencyValue={currencyOptions[0].value}
  languageOptions={languageOptions}
  languageValue={languageOptions[0].value}
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: "Book now" }}
/>
```