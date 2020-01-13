```jsx
const { backgroundImageUrl, navigationItems, currencyOptions, languageOptions } = require('./mock-data/mock-data');

<ContactHomeHero
  logoSubText="King of Joy"
  logoHref="Balalala"
  logoSize="medium"
  logoSrc="https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg"
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