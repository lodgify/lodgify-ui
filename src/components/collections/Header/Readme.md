```jsx
const { navigationItems } = require('./mock-data/navigationItems');
const logoSrc = require('./mock-data/livingstoneLogo.png');

<div style={{ backgroundColor: 'grey'}}>
  <Header
    logoSrc={logoSrc}
    logoText={'Livingstone Cottage'}
    navigationItems={navigationItems}
    primaryCTA={{ href: '/book', text: 'Book now'}}
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
      logoText={'Livingstone Cottage'}
      navigationItems={navigationItems}
    />
  </div>
  <div style={{ height: '20px', width: '100%', }} />
  <div style={{ backgroundColor: 'grey'}}>
    <Header
      logoText={'Livingstone Cottage'}
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
    logoText={'Livingstone Cottage'}
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
    logoText={'Livingstone Cottage'}
    navigationItems={navigationItems}
    primaryCTA={{ href: '/book', text: 'Book now'}}
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
    logoText={'Livingstone Cottage'}
    navigationItems={navigationItems}
  />
</div>
```
