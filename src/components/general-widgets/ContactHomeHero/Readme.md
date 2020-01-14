```jsx
const { backgroundImageUrl, navigationItems, currencyOptions, languageOptions } = require('./mock-data/mock-data');

<ContactHomeHero
  logoSubText="King of Joy"
  logoHref="Balalala"
  logoSize="medium"
  logoSrc="https://li5.cdbcdn.com/oh/a84645c0-0a35-4735-bda5-e5c425c2ffdc.png"
  backgroundImageUrl={backgroundImageUrl}
  headingText='Lindblum'
  callToActionText="Land of mechanical ships"
  className='ma-ma-ma'
  isBackgroundFilled={true}
  primaryButtonText="VUUC"
  phoneNumber={'+1 2345 678912'}
  headingHref="http://www.sss.com"
  currencyOptions={currencyOptions}
  currencyValue={currencyOptions[0].value}
  languageOptions={languageOptions}
  languageValue={languageOptions[0].value}
  navigationMenuItems={navigationItems}
/>
```