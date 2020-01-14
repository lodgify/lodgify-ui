```jsx
const {
  backgroundImageUrl,
  navigationItems,
  currencyOptions, 
  languageOptions
} = require("./mock-data/mock-data");
const galleryImages = [
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Two cats"
  },
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Two more cats"
  },
  {
    url: "https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg",
    descriptionText: "Much cats"
  }
];

<ContactPropertyHero
  logoSubText="King of Joy"
  logoHref="Balalala"
  logoSize="medium"
  logoSrc="https://li5.cdbcdn.com/oh/a84645c0-0a35-4735-bda5-e5c425c2ffdc.png"
  backgroundImageUrl={backgroundImageUrl}
  headerNavigationItems={navigationItems}
  headerPrimaryCTA={{ onClick: console.log, text: "Book now" }}
  galleryImages={galleryImages}
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
/>;
```
