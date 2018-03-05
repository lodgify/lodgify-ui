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
    logoText={'Livingstone lodge'} navigationItems={navigationItems}
    primaryCTA={{ href: '/book', text: 'Book now'}}
  />
</div>
```
