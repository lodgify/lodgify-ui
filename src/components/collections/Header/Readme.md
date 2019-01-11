```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<div style={{ backgroundColor: 'grey'}}>
  <Header
    logoSrc={logoSrc}
    logoText="Livingstone Cottage"
    navigationItems={navigationItems}
    primaryCTA={{ onClick: console.log, text: 'Book now'}}
  />
</div>
```

### Content

#### Logo

A logo can display an image or simple text.

```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<div>
  <div style={{ backgroundColor: 'grey'}}>
    <Header
      logoSrc={logoSrc}
      logoText="Livingstone Cottage"
      navigationItems={navigationItems}
    />
  </div>
  <Divider />
  <div style={{ backgroundColor: 'grey'}}>
    <Header
      logoText="Livingstone Cottage"
      navigationItems={navigationItems}
    />
  </div>
</div>
```

#### Navigation items

Navigation items can be links or groups of subitems.

```jsx
const { navigationItems } = require('./mock-data/navigationItems');
// [
//   { text: 'Home', href: '/' },
//   {
//     text: 'All properties',
//     subItems: [
//       {
//         href: '/la-casa-viva',
//         text: 'La Casa Viva',
//       },
//       {
//         href: '/la-casa-muerta',
//         text: 'La Casa Muerta',
//       },
//       {
//         href: '/the-white-lodge',
//         text: 'The White Lodge',
//       },
//       {
//         href: '/the-black-lodge',
//         text: 'The Black Lodge',
//       },
//     ],
//   },
// ]

const logoSrc = require('./mock-data/livingstoneLogo.png');

<div style={{ backgroundColor: 'grey'}}>
  <Header
    logoSrc={logoSrc}
    logoText="Livingstone Cottage"
    navigationItems={navigationItems}
  />
</div>
```

#### Primary call to action

```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<div style={{ backgroundColor: 'grey'}}>
  <Header
    logoSrc={logoSrc}
    logoText="Livingstone Cottage"
    navigationItems={navigationItems}
    primaryCTA={{ onClick: console.log, text: 'Book now'}}
  />
</div>
```

#### Search bar

The header can display a clickable icon to reveal the search bar on mobile screens

```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const searchBarGuestsOptions = [{ text: '1', value: 1 }];
const searchBarLocationOptions = [{ text: 'Catania', value: 'catania' }];

<div style={{ backgroundColor: 'grey'}}>
  <Header
    logoText="Livingstone Cottage"
    navigationItems={navigationItems}
    searchBarGuestsOptions={searchBarGuestsOptions}
    searchBarLocationOptions={searchBarLocationOptions}
    searchBarHeadingText="Search for a date!"
    searchBarSearchButton={<Button>Custom button</Button>}
  />
</div>
```

### States

#### with active navigation item

```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<div style={{ backgroundColor: 'grey'}}>
  <Header
    activeNavigationItemIndex={0}
    logoSrc={logoSrc}
    logoText="Livingstone Cottage"
    navigationItems={navigationItems}
  />
</div>
```

### Variations

#### Background filled

```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<Header
  isBackgroundFilled
  logoSrc={logoSrc}
  logoText="Livingstone Cottage"
  navigationItems={navigationItems}
  primaryCTA={{ onClick: console.log, text: 'Book now'}}
/>
```

#### Wide navigation items

If the total width of the navigation items exceeds 900px, the header will display only a clickable burger icon to reveal the navigation items.

```jsx
const { largeNavigationItems } = require('./mock-data/navigationItems');
// [
//   { text: 'Home', href: '/' },
//   {
//     text: 'All properties',
//     subItems: [
//       {
//         href: '/la-casa-viva',
//         text: 'La Casa Viva',
//       },
//       {
//         href: '/la-casa-muerta',
//         text: 'La Casa Muerta',
//       },
//       {
//         href: '/the-white-lodge',
//         text: 'The White Lodge',
//       },
//       {
//         href: '/the-black-lodge',
//         text: 'The Black Lodge',
//       },
//     ],
//   },
//   { text: 'Contact Us', href: '/' },
//   {
//     text:
//       'What to do when you go out on a Sunday and then somebody attacks you with big floppy fish',
//     href: '/',
//   },
// ];

const logoSrc = require('./mock-data/livingstoneLogo.png');

<div style={{ backgroundColor: 'grey'}}>
  <Header
    logoSrc={logoSrc}
    logoText="Livingstone Cottage"
    navigationItems={largeNavigationItems}
    primaryCTA={{ onClick: console.log, text: 'Book now'}}
  />
</div>
```
