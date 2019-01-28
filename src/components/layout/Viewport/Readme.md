```jsx
const { navigationItems, images, currencyOptions, languageOptions, footerNavigationItems, socialMediaLinks } = require('./mock-data/mock-data');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<Viewport>
  <div style={{ backgroundColor: 'grey'}}>
  <Header
    logoSrc={logoSrc}
    logoText="Livingstone Cottage"
    navigationItems={navigationItems}
  />
  </div>
  <VerticalGutters>
    <Slideshow images={images} />
  </VerticalGutters>
  <Footer
    currencyOptions={currencyOptions}
    currencyValue={currencyOptions[0].value}
    languageOptions={languageOptions}
    languageValue={languageOptions[0].value}
    navigationItems={footerNavigationItems}
    onChangeCurrency={console.log}
    onChangeLanguage={console.log}
    phoneNumber={'+1 2345 678912'}
    propertyAddress={'The Cat House, Pawprint Way, Catania 08012'}
    socialMediaLinks={socialMediaLinks}
  />
</Viewport>
```
