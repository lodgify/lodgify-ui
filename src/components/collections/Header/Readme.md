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

#### Logo sub text
Sub text can be displayed underneath the logo or logo text.

```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<div>
  <div style={{ backgroundColor: 'grey'}}>
    <Header
      logoSrc={logoSrc}
      logoText="Livingstone Cottage"
      logoSubText="A cottage built from living stones."
      navigationItems={navigationItems}
    />
  </div>
  <Divider />
  <div style={{ backgroundColor: 'grey'}}>
    <Header
      logoText="Livingstone Cottage"
      logoSubText="A cottage built from living stones."
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

If navigationItems are too wide to fit available space, a burger menu will display.

```jsx
const shortNavigationItems = [
  { text: 'Home', href: '/' },
  {
    text: 'All properties',
    subItems: [
      {
        href: '/la-casa-viva',
        text: 'La Casa Viva',
      },
      {
        href: '/la-casa-muerta',
        text: 'La Casa Muerta',
      },
    ],
  }
];
const { navigationItems } = require('./mock-data/navigationItems');

const logoSrc = require('./mock-data/livingstoneLogo.png');

<div style={{ backgroundColor: 'grey'}}>
  <Header
    isBackgroundFilled
    logoSrc={logoSrc}
    logoText="Livingstone Cottage"
    navigationItems={shortNavigationItems}
  />

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
